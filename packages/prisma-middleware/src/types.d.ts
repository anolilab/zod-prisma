export type MiddlewareParameters = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
};

export type PrismaMiddleware = (parameters: MiddlewareParameters, next: (parameters: MiddlewareParameters) => Promise<any>) => Promise<any>;
