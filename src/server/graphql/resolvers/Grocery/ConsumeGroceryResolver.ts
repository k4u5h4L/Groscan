import { Status } from "@prisma/client";
import type { FieldResolver } from "nexus";
import type { GraphQlContextType } from "~/@types/GraphQL";
import logger from "~/config/logger";
import { getUserEmail } from "~/server/utils/getUserEmail";
import { InvalidInputError } from "../../errors/InvalidInputError";

type ArgType = {
    groceryId: string;
};

export const consumeGroceryResolver: FieldResolver<
    "Mutation",
    "Grocery"
> = async (_root, args: ArgType, ctx: GraphQlContextType) => {
    const email = getUserEmail(ctx);

    logger.info(`Resolving consume grocery of user ${email}, args: `);
    console.log(args);

    try {
        const grocery = await ctx.prisma.grocery.update({
            where: {
                id: args.groceryId,
            },
            data: {
                status: Status.CONSUMED,
            },
        });

        logger.info(
            `Successfully consumed grocery for user ${email}, name: ${grocery.name}`
        );

        return grocery;
    } catch (err) {
        logger.error(
            `Something went wrong while trying to consume grocery for user ${email}`
        );
        logger.error(err);
        throw InvalidInputError;
    }
};
