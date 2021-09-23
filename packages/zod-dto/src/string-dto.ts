import { z } from "zod";

import AbstractDto from "./abstract-dto";

export const zStringDto = z.string();

export type StringDtoValue = z.infer<typeof zStringDto>;

export class StringDto extends AbstractDto {
    constructor(value: StringDtoValue) {
        super();

        zStringDto.parse(value);

        this.value = value;

        Object.freeze(this);
    }

    static nullable(value: StringDtoValue | null) {
        return value === null ? null : new StringDto(value);
    }
}
