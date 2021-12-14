import type { ZodString } from "zod";
import { z } from "zod";

import AbstractDto from "./abstract-dto";

export const zStringDto = z.string();

export type StringDtoValue = z.infer<typeof zStringDto>;

export class StringDto extends AbstractDto {
    constructor(value: StringDtoValue, safe: boolean = false) {
        super();

        this.parse(value, safe, StringDto.zod());

        Object.freeze(this);
    }

    static nullable(value: StringDtoValue | null | undefined): StringDto | null {
        return (value === null || typeof value === "undefined") ? null : new StringDto(value);
    }

    static zod(): ZodString {
        return zStringDto;
    }
}
