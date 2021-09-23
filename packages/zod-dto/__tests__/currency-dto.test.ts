import { CurrencyDto } from "../src";

describe("CurrencyDto dto", () => {
    test("it should validate input to be a currency", () => {
        // eslint-disable-next-line no-new
        const dto = new CurrencyDto("EUR");

        expect(dto.value).toBe("EUR");
        expect(dto.toJson()).toBe("{\"value\":\"EUR\"}");
        expect(() => new CurrencyDto("test")).toThrow();
    });

    test("it should nullable", () => {
        expect(CurrencyDto.nullable(null)).toBeNull();
        expect(CurrencyDto.nullable("EUR").toJson()).toBe(new CurrencyDto("EUR").toJson());
    });
});
