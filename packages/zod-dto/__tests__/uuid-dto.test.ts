import { UuidDto } from "../src";

const uuid = "9491d710-3185-4e06-bea0-6a2f275345e0";

describe("UuidDto dto", () => {
    test("it should validate input to be a uuid", () => {
        const dto = new UuidDto(uuid);

        expect(dto.value).toBe(uuid);
        expect(dto.toJson()).toBe(JSON.stringify({ value: uuid }));

        expect(() => new UuidDto("test@test.com")).toThrow();
    });

    test("it should nullable", () => {
        expect(UuidDto.nullable(null)).toBeNull();
        expect(UuidDto.nullable(uuid).toJson()).toBe(new UuidDto(uuid).toJson());
    });
});
