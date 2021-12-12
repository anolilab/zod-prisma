import { ZodType } from "zod";

import { StringDto, zStringDto } from "../src";

const string = "test";

describe("StringDto dto", () => {
    test("it should validate input to be a number", () => {
        const dto = new StringDto(string);

        expect(dto.value).toBe(string);
        expect(dto.toJson()).toBe(JSON.stringify({ value: string }));

        expect(() => new StringDto(0)).toThrow();
    });

    test("it should nullable", () => {
        expect(StringDto.nullable(null)).toBeNull();
        expect(StringDto.nullable(string)?.toJson()).toBe(new StringDto(string).toJson());
    });

    test("it should return a zod type", () => {
        expect(StringDto.zod()).toBeInstanceOf(ZodType);

        StringDto.zod = () => zStringDto.min(10);

        const stringMinLength = "12345678910";
        const dto = new StringDto(stringMinLength);

        expect(dto.value).toBe(stringMinLength);
    });
});
