import { z } from "zod";

import AbstractDto from "./abstract-dto";

export const zStringArrayDto = z.array(z.string());

export type StringArrayDtoValue = z.infer<typeof zStringArrayDto>;

export class StringArrayDto extends AbstractDto {
    constructor(public value: StringArrayDtoValue) {
        super();

        zStringArrayDto.parse(value);

        Object.freeze(this);
    }

    static nullable(value: StringArrayDtoValue | null) {
        return value === null ? null : new StringArrayDto(value);
    }
}
