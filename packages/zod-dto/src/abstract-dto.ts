export default abstract class AbstractDto {
    public value: any;

    public toJson(): string {
        return JSON.stringify(this);
    }
}
