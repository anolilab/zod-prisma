import { ZodType } from "zod";

import { UrlDto, zUrlDto } from "../src";

const url = "http://example.com";

describe("UrlDto dto", () => {
    test("it should validate input to be a url", () => {
        const dto = new UrlDto(url);

        expect(dto.value).toBe(url);
        expect(dto.toJson()).toBe(JSON.stringify({ value: url }));

        expect((new UrlDto(url)).value).toBe(url);
        expect((new UrlDto("https://example.com")).value).toBe("https://example.com");

        expect(() => new UrlDto("test@test.com")).toThrow();
    });

    test("it should nullable", () => {
        expect(UrlDto.nullable(null)).toBeNull();
        // eslint-disable-next-line no-undefined, unicorn/no-useless-undefined
        expect(UrlDto.nullable(undefined)).toBeNull();
        expect(UrlDto.nullable(url)?.toJson()).toBe(new UrlDto(url).toJson());
    });

    test("it should return a zod type", () => {
        expect(UrlDto.zod()).toBeInstanceOf(ZodType);

        UrlDto.zod = () => zUrlDto.min(10);

        const dto = new UrlDto(url);

        expect(dto.value).toBe(url);
    });
});
