import { DatetimeDto } from "../src";

describe("DatetimeDto dto", () => {
    test("it should validate input to be a date time", () => {
        const date = new Date();

        const dto = new DatetimeDto(date);

        expect(dto.value).toBe(date);
        expect(dto.toJson()).toBe(JSON.stringify({ value: date }));
        expect(() => new DatetimeDto("test")).toThrow();
    });

    test("it should nullable", () => {
        const date = new Date();

        expect(DatetimeDto.nullable(null)).toBeNull();
        expect(DatetimeDto.nullable(date).toJson()).toBe(new DatetimeDto(date).toJson());
    });
});
