import { z } from "zod";

import AbstractDto from "./abstract-dto";

export const zHashedPasswordDto = z.string();

export type HashedPasswordDtoValue = z.infer<typeof zHashedPasswordDto>;

export class HashedPasswordDto extends AbstractDto {
    constructor(public value: HashedPasswordDtoValue) {
        super();

        zHashedPasswordDto.parse(value);

        Object.freeze(this);
    }
}
