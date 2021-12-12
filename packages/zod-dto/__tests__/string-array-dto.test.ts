import { ZodType } from "zod";

import { StringArrayDto, zStringArrayDto } from "../src";

const array = ["test", "test2"];

describe("StringArrayDto dto", () => {
    test("it should validate input to be a number", () => {
        const dto = new StringArrayDto(array);

        expect(dto.value).toStrictEqual(array);
        expect(dto.toJson()).toStrictEqual(JSON.stringify({ value: array }));

        expect(() => new StringArrayDto("test")).toThrow();
        expect(() => new StringArrayDto([1])).toThrow();
    });

    test("it should nullable", () => {
        expect(StringArrayDto.nullable(null)).toBeNull();
        expect(StringArrayDto.nullable(array)?.toJson()).toBe(new StringArrayDto(array).toJson());
    });

    test("it should return a zod type", () => {
        expect(StringArrayDto.zod()).toBeInstanceOf(ZodType);

        StringArrayDto.zod = () => zStringArrayDto.min(2);

        const stringMinLength = "12345678910";
        const dto = new StringArrayDto([stringMinLength, stringMinLength]);

        expect(dto.value).toStrictEqual([stringMinLength, stringMinLength]);
    });
});
