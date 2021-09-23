import { z } from "zod";

import AbstractDto from "./abstract-dto";

export const zUrlDto = z.string().url();

export type UrlDtoValue = z.infer<typeof zUrlDto>;

export class UrlDto extends AbstractDto {
    constructor(value: UrlDtoValue) {
        super();

        zUrlDto.parse(value);

        this.value = value;

        Object.freeze(this);
    }

    static nullable(value: UrlDtoValue | null) {
        return value === null ? null : new UrlDto(value);
    }
}
