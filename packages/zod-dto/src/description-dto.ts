import { z } from "zod";

import AbstractDto from "./abstract-dto";

export const zDescriptionDto = z.string();

export type DescriptionDtoValue = z.infer<typeof zDescriptionDto>;

export class DescriptionDto extends AbstractDto {
    constructor(public value: DescriptionDtoValue) {
        super();

        zDescriptionDto.parse(value);

        Object.freeze(this);
    }

    static nullable(value: DescriptionDtoValue | null) {
        return value === null ? null : new DescriptionDto(value);
    }
}
