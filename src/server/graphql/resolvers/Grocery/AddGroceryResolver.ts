import { Status } from "@prisma/client";
import type { FieldResolver } from "nexus";
import type { GraphQlContextType } from "~/@types/GraphQL";
import logger from "~/config/logger";
import { getUserEmail } from "~/server/utils/getUserEmail";

type ArgType = {
    barcode: string;
    name: string;
    desc: string;
    // status: Status;
    image: string;
    manufactured: string;
    expiry: string;
};

export const addGroceryResolver: FieldResolver<"Mutation", "Grocery"> = async (
    _root,
    args: ArgType,
    ctx: GraphQlContextType
) => {
    const email = getUserEmail(ctx);

    logger.info(`Resolving add grocery of user ${email}, args: `);
    console.log(args);

    const grpcery = await ctx.prisma.grocery.create({
        data: {
            barcode: args.barcode,
            name: args.name,
            desc: args.desc,
            status: Status.UPCOMING,
            image: args.image ?? "",
            manufactured: args.manufactured
                ? new Date(parseInt(args.manufactured))
                : new Date(),
            expiry: new Date(parseInt(args.expiry)),

            user: {
                connect: {
                    email: email,
                },
            },
        },
    });

    logger.info(
        `Successfully added grocery for user ${email}, name: ${grpcery.name}`
    );

    return grpcery;
};
