import { generatorHandler } from "@prisma/generator-helper";
import path from "path";
import { Project, StructureKind, VariableDeclarationKind } from "ts-morph";

generatorHandler({
    onManifest() {
        return {
            prettyName: "Zod Schemas",
            defaultOutput: "zod",
            version: "0.2.1",
        };
    },
    onGenerate(options) {
        const project = new Project({
            skipAddingFilesFromTsConfig: true,
        });

        const outputPath = options.generator.output!.value;
        const { models } = options.dmmf.datamodel;

        const prismaClient = options.otherGenerators.find(
            (each) => each.provider.value === "prisma-client-js",
        );

        const { relationModel } = options.generator.config as unknown as Config;

        const indexSource = project.createSourceFile(
            `${outputPath}/index.ts`,
            {},
            {
                overwrite: true,
            },
        );

        models.forEach((model) => {
            indexSource.addExportDeclaration({
                moduleSpecifier: `./${model.name.toLowerCase()}`,
            });
        });
    },
});
