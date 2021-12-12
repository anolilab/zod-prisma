import type { ZodString } from "zod";
import { z } from "zod";

import AbstractDto from "./abstract-dto";

export const zUrlDto = z.string().url();

export type UrlDtoValue = z.infer<typeof zUrlDto>;

export class UrlDto extends AbstractDto {
    constructor(value: UrlDtoValue, safe: boolean = false) {
        super();

        this.parse(value, safe, UrlDto.zod());

        Object.freeze(this);
    }

    static nullable(value: UrlDtoValue | null) {
        return value === null ? null : new UrlDto(value);
    }

    static zod(): ZodString {
        return zUrlDto;
    }
}
