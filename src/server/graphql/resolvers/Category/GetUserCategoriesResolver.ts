import type { GraphQlContextType } from "~/@types/GraphQL";
import type { FieldResolver } from "nexus";
import logger from "~/config/logger";
import { getUserEmail } from "~/server/utils/getUserEmail";
import { getPagination } from "~/server/utils/getPaginationFields";
import { getSearchField } from "~/server/utils/getSearchField";

type ArgType = {
    page: number;
    itemsPerPage: number;
    search: string;
};

export const getUserCategoriesResolver: FieldResolver<
    "Query",
    "Category"
> = async (_root, args: ArgType, ctx: GraphQlContextType) => {
    logger.info(
        `Resolving categories of user ${getUserEmail(ctx)}, page: ${
            args.page
        }, perPage: ${args.itemsPerPage} with search: ${args.search}`
    );

    const { skip, take } = getPagination(args.page, args.itemsPerPage);
    const { search, status } = getSearchField(args.search);

    if (!status) {
        return await ctx.prisma.category.findMany({
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
        return ctx.prisma.category.findMany({
            where: {
                user: {
                    email: getUserEmail(ctx),
                },
                OR: [
                    {
                        name: {
                            contains: search,
                        },
                    },
                    {
                        desc: {
                            contains: search,
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
