import { NumberDto } from "../src";

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
        expect(NumberDto.nullable(2).toJson()).toBe(new NumberDto(2).toJson());
    });
});
