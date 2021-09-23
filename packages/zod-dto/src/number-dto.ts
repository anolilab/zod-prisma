import { z } from "zod";

import AbstractDto from "./abstract-dto";

export const zNumberDto = z.number();

export type NumberDtoValue = z.infer<typeof zNumberDto>;

export class NumberDto extends AbstractDto {
    constructor(value: NumberDtoValue) {
        super();

        zNumberDto.parse(value);

        this.value = value;

        Object.freeze(this);
    }

    static nullable(value: NumberDtoValue | null) {
        return value === null ? null : new NumberDto(value);
    }
}
