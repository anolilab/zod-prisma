import { BooleanDto } from "../src";

describe("Boolean dto", () => {
    test("it should validate input to be a boolean", () => {
        // eslint-disable-next-line no-new
        new BooleanDto(true);
        // eslint-disable-next-line no-new
        new BooleanDto(false);

        expect(() => new BooleanDto("test")).toThrow();
    });
    test("it should nullable", () => {
        expect(BooleanDto.nullable(null)).toBeNull();
        expect(BooleanDto.nullable(true)).toBeTruthy();
    });
});
