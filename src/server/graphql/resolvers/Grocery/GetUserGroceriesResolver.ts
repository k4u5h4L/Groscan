import type { GraphQlContextType } from "~/@types/GraphQL";
import type { FieldResolver } from "nexus";
import logger from "~/config/logger";
import { getUserEmail } from "~/server/utils/getUserEmail";
import { getPagination } from "~/server/utils/getPaginationFields";
import { getSearchField } from "~/server/utils/getSearchField";
import {
    PossibleValues,
    type ExpiryType,
    getExpiryFlag,
} from "~/server/utils/DateUtils";
import { InvalidInputError } from "../../errors/InvalidInputError";

type ArgType = {
    page: number;
    itemsPerPage: number;
    search: string;
    expiry: string;
};

export const getUserGroceriesResolver: FieldResolver<
    "Query",
    "Grocery"
> = async (_root, args: ArgType, ctx: GraphQlContextType) => {
    logger.info(
        `Resolving groceries of user ${getUserEmail(ctx)}, page: ${
            args.page
        }, perPage: ${args.itemsPerPage} with search: ${args.search}`
    );

    const { skip, take } = getPagination(args.page, args.itemsPerPage);
    const { search, status } = getSearchField(args.search);

    // @ts-ignore
    if (!args.expiry || !PossibleValues.includes(args.expiry.toUpperCase())) {
        return InvalidInputError;
    }

    const expiry: ExpiryType = getExpiryFlag(args.expiry);

    if (!status) {
        if (expiry == "UPCOMING") {
            return await ctx.prisma.grocery.findMany({
                where: {
                    user: {
                        email: getUserEmail(ctx),
                    },
                    expiry: {
                        gte: new Date(),
                    },
                },
                orderBy: {
                    createdAt: "asc",
                },
                skip: skip,
                take: take,
            });
        } else if (expiry == "EXPIRED") {
            return await ctx.prisma.grocery.findMany({
                where: {
                    user: {
                        email: getUserEmail(ctx),
                    },
                    expiry: {
                        lt: new Date(),
                    },
                },
                orderBy: {
                    createdAt: "asc",
                },
                skip: skip,
                take: take,
            });
        }

        return await ctx.prisma.grocery.findMany({
            where: {
                user: {
                    email: getUserEmail(ctx),
                },
            },
            orderBy: {
                createdAt: "asc",
            },
            skip: skip,
            take: take,
        });
    } else {
        if (expiry == "UPCOMING") {
            return ctx.prisma.grocery.findMany({
                where: {
                    user: {
                        email: getUserEmail(ctx),
                    },
                    expiry: {
                        gte: new Date(),
                    },
                    OR: [
                        {
                            name: {
                                contains: search,
                                mode: "insensitive",
                            },
                        },
                        {
                            desc: {
                                contains: search,
                                mode: "insensitive",
                            },
                        },
                    ],
                },
                orderBy: {
                    createdAt: "asc",
                },
                skip: skip,
                take: take,
            });
        } else if (expiry == "EXPIRED") {
            return await ctx.prisma.grocery.findMany({
                where: {
                    user: {
                        email: getUserEmail(ctx),
                    },
                    expiry: {
                        lt: new Date(),
                    },
                    OR: [
                        {
                            name: {
                                contains: search,
                                mode: "insensitive",
                            },
                        },
                        {
                            desc: {
                                contains: search,
                                mode: "insensitive",
                            },
                        },
                    ],
                },
                orderBy: {
                    createdAt: "asc",
                },
                skip: skip,
                take: take,
            });
        }

        return ctx.prisma.grocery.findMany({
            where: {
                user: {
                    email: getUserEmail(ctx),
                },
                OR: [
                    {
                        name: {
                            contains: search,
                            mode: "insensitive",
                        },
                    },
                    {
                        desc: {
                            contains: search,
                            mode: "insensitive",
                        },
                    },
                ],
            },
            orderBy: {
                createdAt: "asc",
            },
            skip: skip,
            take: take,
        });
    }
};
