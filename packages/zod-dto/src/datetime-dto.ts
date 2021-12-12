import type { ZodDate } from "zod";
import { z } from "zod";

import AbstractDto from "./abstract-dto";

export const zDatetimeDto = z.date();

export type DatetimeDtoValue = z.infer<typeof zDatetimeDto>;

export class DatetimeDto extends AbstractDto {
    constructor(value: DatetimeDtoValue, safe: boolean = false) {
        super();

        this.parse(value, safe, DatetimeDto.zod());

        Object.freeze(this);
    }

    static nullable(value: DatetimeDtoValue | null) {
        return value === null ? null : new DatetimeDto(value);
    }

    static zod(): ZodDate {
        return zDatetimeDto;
    }
}
