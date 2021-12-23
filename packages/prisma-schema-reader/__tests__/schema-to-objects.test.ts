import path from "path";

import { SchemaToObjectTransformer } from "../src";

const prismaSchemaPath = path.resolve("./packages/prisma-schema-reader/__tests__/fixtures/schema.prisma");

describe("schema-to-object", () => {
    test("it should transform prisma.schema to objects", () => {
        const transformer = new SchemaToObjectTransformer(prismaSchemaPath);

        expect(transformer.transform()).toMatchSnapshot();
    });
});
