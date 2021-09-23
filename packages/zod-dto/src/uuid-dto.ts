import { z } from "zod";

import AbstractDto from "./abstract-dto";

export const zUuidDto = z.string().uuid();

export type UuidDtoValue = z.infer<typeof zUuidDto>;

export class UuidDto extends AbstractDto {
    constructor(value: UuidDtoValue) {
        super();

        zUuidDto.parse(value);

        this.value = value;

        Object.freeze(this);
    }

    static nullable(value: UuidDtoValue | null) {
        return value === null ? null : new UuidDto(value);
    }
}
