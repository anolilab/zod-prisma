import type { ZodArray, ZodTypeAny } from "zod";
import { z } from "zod";

import AbstractDto from "./abstract-dto";

export const zStringArrayDto = z.array(z.string());

export type StringArrayDtoValue = z.infer<typeof zStringArrayDto>;

export class StringArrayDto extends AbstractDto {
    constructor(value: StringArrayDtoValue, safe: boolean = false) {
        super();

        this.parse(value, safe, StringArrayDto.zod());

        Object.freeze(this);
    }

    static nullable(value: StringArrayDtoValue | null) {
        return value === null ? null : new StringArrayDto(value);
    }

    static zod(): ZodArray<ZodTypeAny> {
        return zStringArrayDto;
    }
}
