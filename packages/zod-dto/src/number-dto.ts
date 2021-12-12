import type { ZodNumber } from "zod";
import { z } from "zod";

import AbstractDto from "./abstract-dto";

export const zNumberDto = z.number();

export type NumberDtoValue = z.infer<typeof zNumberDto>;

export class NumberDto extends AbstractDto {
    constructor(value: NumberDtoValue, safe: boolean = false) {
        super();

        this.parse(value, safe, NumberDto.zod());

        Object.freeze(this);
    }

    static nullable(value: NumberDtoValue | null) {
        return value === null ? null : new NumberDto(value);
    }

    static zod(): ZodNumber {
        return zNumberDto;
    }
}
