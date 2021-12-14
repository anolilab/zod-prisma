import type { ZodString } from "zod";
import { z } from "zod";

import AbstractDto from "./abstract-dto";

export const zCuidDto = z.string().cuid();

export type CuidDtoValue = z.infer<typeof zCuidDto>;

export class CuidDto extends AbstractDto {
    constructor(value: CuidDtoValue, safe: boolean = false) {
        super();

        this.parse(value, safe, CuidDto.zod());

        Object.freeze(this);
    }

    static nullable(value: CuidDtoValue | null | undefined): CuidDto | null {
        return (value === null || typeof value === "undefined") ? null : new CuidDto(value);
    }

    static zod(): ZodString {
        return zCuidDto;
    }
}
