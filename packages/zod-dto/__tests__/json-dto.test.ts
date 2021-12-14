import type { ZodType } from "zod";

import { JsonDto } from "../src";

const json = {
    string: "test",
    number: 11,
    boolean: true,
    n: null,
};

describe("JsonDto dto", () => {
    test("it should validate input to be a json", () => {
        const dto = new JsonDto(json);

        expect(dto.value).toStrictEqual(json);
        expect(dto.toJson()).toStrictEqual(JSON.stringify({ value: json }));

        const stringJson = "{name: string}";
        const stringJsonDto = new JsonDto(stringJson);

        expect(stringJsonDto.toJson()).toStrictEqual(JSON.stringify({ value: stringJson }));
    });

    test("it should nullable", () => {
        expect(JsonDto.nullable(null)).toBeNull();
        expect(JsonDto.nullable()).toBeNull();
        expect(JsonDto.nullable(json)?.toJson()).toBe(new JsonDto(json).toJson());
    });

    test("it should return a zod type", () => {
        expect(JsonDto.zod()).toBeInstanceOf(ZodType);
    });
});
