import { z, ZodType } from "zod";

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
        // eslint-disable-next-line no-undefined, unicorn/no-useless-undefined
        expect(CurrencyDto.nullable(undefined)).toBeNull();
        expect(CurrencyDto.nullable("EUR")?.toJson()).toBe(new CurrencyDto("EUR").toJson());
    });

    test("it should return a zod type", () => {
        expect(CurrencyDto.zod()).toBeInstanceOf(ZodType);

        CurrencyDto.zod = () => z.string().length(4);

        const stringLength = "EUR0";
        const dto = new CurrencyDto(stringLength);

        expect(dto.value).toBe(stringLength);
    });
});
