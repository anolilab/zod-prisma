import { z } from "zod";

import AbstractDto from "./abstract-dto";

type Literal = boolean | null | number | string;
type JsonSchema = Literal | { [key: string]: JsonSchema } | JsonSchema[];

const literalSchema = z.union([z.string(), z.number(), z.boolean(), z.null()]);

export const zJsonDto: z.ZodSchema<JsonSchema> = z.lazy(() => z.union([literalSchema, z.array(zJsonDto), z.record(zJsonDto)]));

export type JsonDtoValue = z.infer<typeof zJsonDto>;

export class JsonDto extends AbstractDto {
    constructor(value: JsonDtoValue) {
        super();

        zJsonDto.parse(value);

        this.value = value;

        Object.freeze(this);
    }

    static nullable(value: JsonDtoValue | null) {
        return value === null ? null : new JsonDto(value);
    }
}
