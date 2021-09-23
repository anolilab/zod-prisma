import { UrlDto } from "../src";

const url = "http://example.com";

describe("UrlDto dto", () => {
    test("it should validate input to be a url", () => {
        const dto = new UrlDto(url);

        expect(dto.value).toBe(url);
        expect(dto.toJson()).toBe(JSON.stringify({ value: url }));

        expect((new UrlDto("http://www.example.com")).value).toBe("http://www.example.com");
        expect((new UrlDto("https://example.com")).value).toBe("https://example.com");

        expect(() => new UrlDto("test@test.com")).toThrow();
    });

    test("it should nullable", () => {
        expect(UrlDto.nullable(null)).toBeNull();
        expect(UrlDto.nullable(url).toJson()).toBe(new UrlDto(url).toJson());
    });
});
