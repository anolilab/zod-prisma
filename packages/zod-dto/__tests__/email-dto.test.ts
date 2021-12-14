import type { ZodType } from "zod";

import { EmailDto, zEmailDto } from "../src";

const email = "example@example.com";

describe("EmailDto dto", () => {
    test("it should validate input to be a email", () => {
        const dto = new EmailDto(email);

        expect(dto.value).toStrictEqual(email);
        expect(dto.toJson()).toStrictEqual(JSON.stringify({ value: email }));
        expect(() => new EmailDto("test")).toThrow();
    });

    test("it should nullable", () => {
        expect(EmailDto.nullable(null)).toBeNull();
        expect(EmailDto.nullable()).toBeNull();
        expect(EmailDto.nullable(email)?.toJson()).toBe(new EmailDto(email).toJson());
    });

    test("it should return a zod type", () => {
        expect(EmailDto.zod()).toBeInstanceOf(ZodType);

        EmailDto.zod = () => zEmailDto.min(10);

        const dto = new EmailDto(email);

        expect(dto.value).toBe(email);
    });
});
