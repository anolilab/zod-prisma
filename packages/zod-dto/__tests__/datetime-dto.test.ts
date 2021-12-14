import { ZodType } from "zod";

import { DatetimeDto } from "../src";

describe("DatetimeDto dto", () => {
    test("it should validate input to be a date time", () => {
        const date = new Date();

        const dto = new DatetimeDto(date);

        expect(dto.value).toStrictEqual(date);
        expect(dto.toJson()).toStrictEqual(JSON.stringify({ value: date }));
        expect(() => new DatetimeDto("test")).toThrow();
    });

    test("it should nullable", () => {
        const date = new Date();

        expect(DatetimeDto.nullable(null)).toBeNull();
        // eslint-disable-next-line no-undefined, unicorn/no-useless-undefined
        expect(DatetimeDto.nullable(undefined)).toBeNull();
        expect(DatetimeDto.nullable(date)?.toJson()).toBe(new DatetimeDto(date).toJson());
    });

    test("it should return a zod type", () => {
        expect(DatetimeDto.zod()).toBeInstanceOf(ZodType);
    });
});
