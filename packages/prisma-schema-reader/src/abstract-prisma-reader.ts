import { existsSync, readFileSync } from "node:fs";

import type { Field } from "./types";

abstract class AbstractPrismaReader {
    protected path: string;

    protected data: string;

    public constructor(path: string) {
        this.path = path;

        this.checkIfSchemaExit();

        this.data = readFileSync(path, { encoding: "utf-8" });
    }

    protected get models() {
        return this.data.match(/\n(model(\s)[\S\s]*?})/g);
    }

    protected get enums() {
        return this.data.match(/\n(enum(\s)[\S\s]*?})/g);
    }

    // eslint-disable-next-line class-methods-use-this
    protected blockLines(block: string) {
        return block.split(/\n/).filter((v) => v);
    }

    protected checkIfSchemaExit() {
        if (!existsSync(this.path)) {
            // eslint-disable-next-line no-console
            console.error(`Error: "schema.prisma" file not found in "${this.path}"`);
            // eslint-disable-next-line unicorn/no-process-exit
            process.exit();
        }
    }

    // eslint-disable-next-line class-methods-use-this
    protected getType(line: string[]) {
        return line[1].replace("?", "").replace("[]", "");
    }

    protected getKind(type: string) {
        return this.data.includes(`enum ${type} `) ? "enum" : (this.data.includes(`model ${type} `) ? "object" : "scalar");
    }

    protected getClassName(lines: string[]) {
        return this.lineArray(lines[0])[1];
    }

    // eslint-disable-next-line class-methods-use-this
    protected lineArray(line: string) {
        return line
            .replace(/[\n\r]/g, "")
            .split(" ")
            .filter((v) => v);
    }

    // eslint-disable-next-line class-methods-use-this
    protected getMap(line: string): string | undefined {
        const value = line.match(/@map\((.*?)\)/);

        if (value) {
            return value[1].replace(/name/, "").replace(":", "").replace(" ", "").replace(/"/g, "");
        }

        // eslint-disable-next-line no-undefined
        return undefined;
    }

    // eslint-disable-next-line class-methods-use-this
    protected getRelation(line: string): { name?: string; fields?: string[]; references?: string[] } | undefined {
        const relationString = line.match(/@relation\((.*?)\)/);

        if (relationString) {
            const relation: Field["relation"] = {};
            const name = relationString[1].match(/"(\w+)"/);

            if (name) {
                // eslint-disable-next-line prefer-destructuring
                relation.name = name[1];
            }

            ["fields", "references"].forEach((item) => {
                // eslint-disable-next-line @rushstack/security/no-unsafe-regexp
                const pattern = new RegExp(`${item}:[\\s\\S]\\[(.*?)\\]`);
                const values = relationString[1].match(pattern);
                if (values) {
                    const asArray = values[1]
                        .replace(/ /g, "")
                        .split(",")
                        .filter((v) => v);

                    if (asArray.length > 0) {
                        relation[item as "fields" | "references"] = asArray;
                    }
                }
            });

            return relation;
        }

        // eslint-disable-next-line no-undefined
        return undefined;
    }
}

export default AbstractPrismaReader;
