import { PrismaClient } from "@prisma/client";

import type { PrismaMiddleware } from "./types";

/* eslint no-param-reassign: "off", prefer-destructuring: "off", unicorn/consistent-destructuring: "off", no-undefined: "off" */
// eslint-disable-next-line import/exports-last
export const findMiddleware: PrismaMiddleware = async (parameters, next) => {
    if (parameters.action === "findUnique") {
        // eslint-disable-next-line no-param-reassign
        parameters.action = "findFirst";

        const { where } = parameters.args;
        // Clear out the filters and reapply them so we can change the shape of a composite key (WhereUniqueInput)
        // to fit the shape of what findFirst would expect (WhereInput)
        // We do that by taking anything that isn't an Object and just putting it right back in,
        // but if we encounter an object we have to iterate through its members to pull them out one level.
        parameters.args.where = {};

        Object.entries(where).forEach((argument) => {
            if (typeof argument[1] !== "object") {
                parameters.args.where[argument[0]] = argument[1];
            } else {
                Object.entries(argument[1] as Record<string, unknown>).forEach((subarg) => {
                    parameters.args.where[subarg[0]] = subarg[1];
                });
            }
        });

        parameters.args.where.deletedAt = null;
    }

    if (parameters.action === "findMany") {
        if (!parameters.args) {
            parameters.args = {};
        }

        if (parameters.args?.where !== undefined) {
            if (parameters.args.where.deletedAt === undefined) {
                parameters.args.where.deletedAt = null;
            }
        } else {
            parameters.args.where = { deletedAt: null };
        }
    }

    return next(parameters);
};

// eslint-disable-next-line import/exports-last
export const updateMiddleware: PrismaMiddleware = async (parameters, next) => {
    if (parameters.action === "updateMany" || parameters.action === "update") {
        if (!parameters.args) {
            parameters.args = {};
        }

        if (!parameters.args.data) {
            parameters.args.data = {};
        }

        parameters.args.data.updatedAt = new Date();
    }
    return next(parameters);
};

// eslint-disable-next-line import/exports-last
export const deleteMiddleware: PrismaMiddleware = async (parameters, next) => {
    if (parameters.action === "delete") {
        parameters.action = "update";
        parameters.args.data = { deletedAt: new Date() };
    }
    if (parameters.action === "deleteMany") {
        if (!parameters.args) {
            parameters.args = {};
        }
        parameters.action = "updateMany";
        if (parameters.args?.data !== undefined) {
            parameters.args.data.deletedAt = new Date();
        } else {
            parameters.args.data = { deletedAt: new Date() };
        }
    }

    return next(parameters);
};

const applySoftDeleteMiddleware = (prisma: PrismaClient) => {
    prisma.$use(findMiddleware);
    prisma.$use(updateMiddleware);
    prisma.$use(deleteMiddleware);
};

export default applySoftDeleteMiddleware;
