import { z } from "zod";

import AbstractDto from "./abstract-dto";

export const zStatusDto = z.union([z.literal("ACTIVE"), z.literal("BANNED")]);

export type StatusDtoValue = z.infer<typeof zStatusDto>;

export class StatusDto extends AbstractDto {
    constructor(public value: StatusDtoValue) {
        super();

        zStatusDto.parse(value);

        Object.freeze(this);
    }
}
