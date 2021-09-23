import { z } from "zod";

import AbstractDto from "./abstract-dto";

export const zImageDto = z.object({
    data: z.string().or(z.instanceof(Buffer)),
    type: z.string(),
    size: z.object({
        width: z.string(),
        height: z.string(),
    }),
    name: z.string().optional(),
    alt: z.string().optional(),
});

export type ImageDtoValue = z.infer<typeof zImageDto>;

export class ImageDto extends AbstractDto {
    constructor(value: ImageDtoValue) {
        super();

        let image = value.data;

        if (Buffer.isBuffer(value.data)) {
            image = value.data.toString("base64");
        }

        // eslint-disable-next-line no-param-reassign
        value.data = image as string;

        zImageDto.parse(value);

        this.value = value;

        Object.freeze(this);
    }

    static nullable(value: ImageDtoValue | null) {
        return value === null ? null : new ImageDto(value);
    }
}
