import { ImageDto } from "../src";
import { ZodType } from "zod";

const image = {
    data: "dsanojksdafvdas4csda56v6a1c9+v4erfv6qsa1c6q",
    type: "image/jpge",
    size: {
        width: "100px",
        height: "100px",
    },
    name: "test",
    alt: "test",
};

describe("ImageDto dto", () => {
    test("it should validate input to be a image object", () => {
        const dto = new ImageDto(image);

        expect(dto.value).toStrictEqual(image);
        expect(dto.toJson()).toStrictEqual(JSON.stringify({ value: image }));
        expect(() => new ImageDto("test")).toThrow();
    });

    test("it should nullable", () => {
        expect(ImageDto.nullable(null)).toBeNull();
        expect(ImageDto.nullable(image)?.toJson()).toBe(new ImageDto(image).toJson());
    });

    test("it should return a zod type", () => {
        expect(ImageDto.zod()).toBeInstanceOf(ZodType);
    });
});
