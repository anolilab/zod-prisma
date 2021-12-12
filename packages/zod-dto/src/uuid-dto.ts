import type { ZodString } from "zod";
import { z } from "zod";

import AbstractDto from "./abstract-dto";

export const zUuidDto = z.string().uuid();

export type UuidDtoValue = z.infer<typeof zUuidDto>;

export class UuidDto extends AbstractDto {
    constructor(value: UuidDtoValue, safe: boolean = false) {
        super();

        this.parse(value, safe, UuidDto.zod());

        Object.freeze(this);
    }

    static nullable(value: UuidDtoValue | null) {
        return value === null ? null : new UuidDto(value);
    }

    static zod(): ZodString {
        return zUuidDto;
    }
}
