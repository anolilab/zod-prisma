import type { ZodType } from "zod";

import { NumberDto, zNumberDto } from "../src";

describe("NumberDto dto", () => {
    test("it should validate input to be a number", () => {
        const dto = new NumberDto(1);

        expect(dto.value).toBe(1);
        expect((new NumberDto(0)).value).toBe(0);
        expect(dto.toJson()).toBe(JSON.stringify({ value: 1 }));
        expect(() => new NumberDto("test")).toThrow();
    });

    test("it should nullable", () => {
        expect(NumberDto.nullable(null)).toBeNull();
        // eslint-disable-next-line no-undefined, unicorn/no-useless-undefined
        expect(NumberDto.nullable(undefined)).toBeNull();
        expect(NumberDto.nullable(2)?.toJson()).toBe(new NumberDto(2).toJson());
    });

    test("it should return a zod type", () => {
        expect(NumberDto.zod()).toBeInstanceOf(ZodType);

        NumberDto.zod = () => zNumberDto.min(10);

        const number = 11;

        const dto = new NumberDto(number);

        expect(dto.value).toBe(number);
    });
});
