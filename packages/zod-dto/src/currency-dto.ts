import type { ZodString } from "zod";
import { z } from "zod";

import AbstractDto from "./abstract-dto";

export const zCurrencyDto = z.string().length(3);

export type CurrencyDtoValue = z.infer<typeof zCurrencyDto>;

export class CurrencyDto extends AbstractDto {
    constructor(value: CurrencyDtoValue, safe: boolean = false) {
        super();

        this.parse(value, safe, CurrencyDto.zod());

        Object.freeze(this);
    }

    static nullable(value: CurrencyDtoValue | null | undefined): CurrencyDto | null {
        return (value === null || typeof value === "undefined") ? null : new CurrencyDto(value);
    }

    static zod(): ZodString {
        return zCurrencyDto;
    }
}
