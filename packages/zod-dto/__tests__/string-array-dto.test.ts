import { StringArrayDto } from "../src";

const array = ["test", "test2"];

describe("NumberDto dto", () => {
    test("it should validate input to be a number", () => {
        const dto = new StringArrayDto(array);

        expect(dto.value).toBe(array);
        expect(dto.toJson()).toBe(JSON.stringify({ value: array }));

        expect(() => new StringArrayDto("test")).toThrow();
        expect(() => new StringArrayDto([1])).toThrow();
    });

    test("it should nullable", () => {
        expect(StringArrayDto.nullable(null)).toBeNull();
        expect(StringArrayDto.nullable(array).toJson()).toBe(new StringArrayDto(array).toJson());
    });
});
