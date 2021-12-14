import type { ZodString } from "zod";
import { z } from "zod";

import AbstractDto from "./abstract-dto";

export const zEmailDto = z.string().email();

export type EmailDtoValue = z.infer<typeof zEmailDto>;

export class EmailDto extends AbstractDto {
    constructor(public value: EmailDtoValue, safe: boolean = false) {
        super();

        this.parse(value, safe, EmailDto.zod());

        this.value = this.value.toLowerCase();

        Object.freeze(this);
    }

    static nullable(value: EmailDtoValue | null | undefined): EmailDto | null {
        return (value === null || typeof value === "undefined") ? null : new EmailDto(value);
    }

    static zod(): ZodString {
        return zEmailDto;
    }
}
