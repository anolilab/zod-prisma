import { z } from "zod";

import AbstractDto from "./abstract-dto";

export const zCuidDto = z.string().cuid();

export type CuidDtoValue = z.infer<typeof zCuidDto>;

export class CuidDto extends AbstractDto {
    constructor(value: CuidDtoValue) {
        super();

        zCuidDto.parse(value);

        this.value = value;

        Object.freeze(this);
    }

    static nullable(value: CuidDtoValue | null) {
        return value === null ? null : new CuidDto(value);
    }
}
