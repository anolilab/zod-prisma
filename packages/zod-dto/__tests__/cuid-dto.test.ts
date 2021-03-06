import { ZodType } from "zod";

import { CuidDto } from "../src";

const cuid = "ckopqwooh000001la8mbi2im9";

describe("CuidDto dto", () => {
    test("it should validate input to be a cuid", () => {
        const dto = new CuidDto(cuid);

        expect(dto.value).toBe(cuid);
        expect(dto.toJson()).toBe(JSON.stringify({ value: cuid }));

        expect(() => new CuidDto("test@test.com")).toThrow();
    });

    test("it should be nullable", () => {
        expect(CuidDto.nullable(null)).toBeNull();
        // eslint-disable-next-line no-undefined, unicorn/no-useless-undefined
        expect(CuidDto.nullable(undefined)).toBeNull();
        expect(CuidDto.nullable(cuid)?.toJson()).toBe(new CuidDto(cuid).toJson());
    });

    test("it should return a zod type", () => {
        expect(CuidDto.zod()).toBeInstanceOf(ZodType);
    });
});
