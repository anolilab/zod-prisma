import { StringDto } from "../src";

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
        expect(StringDto.nullable(string).toJson()).toBe(new StringDto(string).toJson());
    });
});
