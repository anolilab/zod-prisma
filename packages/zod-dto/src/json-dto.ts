import { z } from "zod";

import AbstractDto from "./abstract-dto";

type Literal = boolean | null | number | string;
type JsonSchema = Literal | { [key: string]: JsonSchema } | JsonSchema[];

const literalSchema = z.union([z.string(), z.number(), z.boolean(), z.null()]);

export const zJsonDto: z.ZodSchema<JsonSchema> = z.lazy(() => z.union([literalSchema, z.array(zJsonDto), z.record(zJsonDto)]));

export type JsonDtoValue = z.infer<typeof zJsonDto>;

export class JsonDto extends AbstractDto {
    constructor(value: JsonDtoValue, safe: boolean = false) {
        super();

        this.parse(value, safe, JsonDto.zod());

        Object.freeze(this);
    }

    static nullable(value: JsonDtoValue | null | undefined): JsonDto | null {
        return (value === null || typeof value === "undefined") ? null : new JsonDto(value);
    }

    static zod(): z.ZodSchema<JsonSchema> {
        return zJsonDto;
    }
}
