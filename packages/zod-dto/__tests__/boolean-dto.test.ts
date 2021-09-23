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
        expect(BooleanDto.nullable(true)).toBeTruthy();
    });
});
