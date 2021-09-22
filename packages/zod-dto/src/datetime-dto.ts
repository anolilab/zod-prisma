import { z } from "zod";

import AbstractDto from "./abstract-dto";

export const zDatetimeDto = z.date();

export type DatetimeDtoValue = z.infer<typeof zDatetimeDto>;

export class DatetimeDto extends AbstractDto {
    constructor(public value: DatetimeDtoValue) {
        super();

        zDatetimeDto.parse(value);

        Object.freeze(this);
    }

    static nullable(value: DatetimeDtoValue | null) {
        return value === null ? null : new DatetimeDto(value);
    }
}
