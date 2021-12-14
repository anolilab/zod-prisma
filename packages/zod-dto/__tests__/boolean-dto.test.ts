import type { ZodType } from "zod";

import { BooleanDto } from "../src";

describe("Boolean dto", () => {
    test("it should validate input to be a boolean", () => {
        // eslint-disable-next-line no-new
        const dto = new BooleanDto(true);
        // eslint-disable-next-line no-new
        new BooleanDto(false);

        expect(dto.value).toBeTruthy();
        expect(dto.toJson()).toBe("{\"value\":true}");

        expect(() => new BooleanDto("test")).toThrow();
    });

    test("it should nullable", () => {
        expect(BooleanDto.nullable(null)).toBeNull();
        // eslint-disable-next-line no-undefined, unicorn/no-useless-undefined
        expect(BooleanDto.nullable(undefined)).toBeNull();
        expect(BooleanDto.nullable(true)).toBeTruthy();
    });

    test("it should return a zod type", () => {
        expect(BooleanDto.zod()).toBeInstanceOf(ZodType);
    });
});
