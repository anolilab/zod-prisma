import { z } from "zod";

import AbstractDto from "./abstract-dto";

export const zEmailDto = z.string().email();

export type EmailDtoValue = z.infer<typeof zEmailDto>;

export class EmailDto extends AbstractDto {
    constructor(public value: EmailDtoValue) {
        super();

        zEmailDto.parse(value);

        this.value = value.toLowerCase();

        Object.freeze(this);
    }

    static nullable(value: EmailDtoValue | null) {
        return value === null ? null : new EmailDto(value);
    }
}
