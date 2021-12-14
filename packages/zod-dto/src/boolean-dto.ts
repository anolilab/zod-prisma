import type { ZodBoolean } from "zod";
import { z } from "zod";

import AbstractDto from "./abstract-dto";

export const zBooleanDto = z.boolean();

export type BooleanDtoValue = z.infer<typeof zBooleanDto>;

export class BooleanDto extends AbstractDto {
    constructor(value: BooleanDtoValue, safe: boolean = false) {
        super();

        this.parse(value, safe, BooleanDto.zod());

        Object.freeze(this);
    }

    static nullable(value: BooleanDtoValue | null | undefined): BooleanDto | null {
        return (value === null || typeof value === "undefined") ? null : new BooleanDto(value);
    }

    static zod(): ZodBoolean {
        return zBooleanDto;
    }
}
