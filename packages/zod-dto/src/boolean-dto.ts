import { z } from "zod";

import AbstractDto from "./abstract-dto";

export const zBooleanDto = z.boolean();

export type BooleanDtoValue = z.infer<typeof zBooleanDto>;

export class BooleanDto extends AbstractDto {
    constructor(public value: BooleanDtoValue) {
        super();

        zBooleanDto.parse(value);

        Object.freeze(this);
    }

    static nullable(value: BooleanDtoValue | null) {
        return value === null ? null : new BooleanDto(value);
    }
}
