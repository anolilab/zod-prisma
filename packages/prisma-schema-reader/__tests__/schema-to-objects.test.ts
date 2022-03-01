import path from "node:path";

import { SchemaToObjectTransformer } from "../src";
// eslint-disable-next-line unicorn/prefer-module
const prismaSchemaPath = path.resolve(__dirname, "fixtures/schema.prisma");

describe("schema-to-object", () => {
    test("it should transform prisma.schema to objects", () => {
        const transformer = new SchemaToObjectTransformer(prismaSchemaPath);

        expect(transformer.transform()).toMatchSnapshot();
    });
});
