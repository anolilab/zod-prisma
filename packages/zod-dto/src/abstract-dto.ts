import type { ZodType } from "zod";

export default abstract class AbstractDto {
    public value: any;

    public toJson(): string {
        return JSON.stringify(this);
    }

    // eslint-disable-next-line class-methods-use-this
    protected parse(value: any, safe: boolean, zod: ZodType<any>): void {
        this.value = safe ? zod.safeParse(value) : zod.parse(value);
    }

    static zod(): ZodType<any> {
        throw new Error("not implemented!");
    }
}
