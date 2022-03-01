import AbstractPrismaReader from "./abstract-prisma-reader";
import {
    Enums, Field, Model, SchemaObject,
} from "./types";

class SchemaToObjectTransformer extends AbstractPrismaReader {
    schemaObject: SchemaObject = {
        models: [],
        enums: [],
    };

    public transform(): SchemaObject {
        this.getModels();
        this.getEnums();

        return this.schemaObject;
    }

    // eslint-disable-next-line radar/cognitive-complexity
    private getModels() {
        if (this.models) {
            this.models.forEach((model) => {
                const lines = this.blockLines(model);
                const modelObject: Model = {
                    name: this.getClassName(lines),
                    fields: [],
                };

                let documentation = "";

                // eslint-disable-next-line no-plusplus
                for (let index = 1; index + 1 < lines.length; index++) {
                    const line = this.lineArray(lines[index]);

                    if (line[0].includes("//")) {
                        documentation = documentation ? `${documentation}\n${line.join(" ")}` : line.join(" ");
                    } else if (line[0].includes("@@")) {
                        modelObject.map = this.getMap(lines[index]);
                    } else {
                        const type = this.getType(line);
                        const field: Field = {
                            name: line[0],
                            type,
                            isId: line.includes("@id"),
                            unique: line.includes("@unique"),
                            list: line[1].includes("[]"),
                            required: !line[1].includes("[]") && !line[1].includes("?"),
                            kind: this.getKind(type),
                            documentation,
                            map: this.getMap(lines[index]),
                        };

                        if (field.kind === "object") {
                            field.relation = this.getRelation(lines[index]);
                        }

                        modelObject.fields.push(field);
                        documentation = "";
                    }
                }

                modelObject.documentation = documentation;

                modelObject.fields
                    .filter((item) => item.kind !== "object")
                    .forEach((item) => {
                        let relationField = false;

                        modelObject.fields
                            .filter((field) => field.kind === "object")
                            .forEach((field) => {
                                if (!relationField) {
                                    relationField = !!field.relation?.fields?.includes(item.name);
                                }
                            });

                        // eslint-disable-next-line no-param-reassign
                        item.relationField = relationField;
                    });

                this.schemaObject.models.push({ ...modelObject });
            });
        }
    }

    private getEnums() {
        if (this.enums) {
            this.enums.forEach((item) => {
                const lines = this.blockLines(item);
                const itemObject: Enums = {
                    name: this.getClassName(lines),
                    fields: [],
                };

                // eslint-disable-next-line no-plusplus
                for (let index = 1; index + 1 < lines.length; index++) {
                    const line = this.lineArray(lines[index]);

                    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                    !line[0].includes("//") && itemObject.fields.push(line[0]);
                }

                this.schemaObject.enums.push({ ...itemObject });
            });
        }
    }
}

export default SchemaToObjectTransformer;
