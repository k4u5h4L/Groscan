import { ApolloServer } from "@apollo/server";
import { ApolloServerPluginCacheControl } from "@apollo/server/plugin/cacheControl";
import { schema } from "~/server/graphql/schema";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { getSession } from "next-auth/react";
import { AuthenticationError } from "~/server/graphql/errors/AuthError";
import type { NextApiRequest, NextApiResponse } from "next";
import type { GraphQlContextType } from "~/@types/GraphQL";
import { prisma } from "~/server/db/client";
import { env } from "~/env.mjs";

const server = new ApolloServer({
    schema,
    plugins: [
        ApolloServerPluginCacheControl({
            // Cache everything for below seconds by default.
            defaultMaxAge: 10,

            calculateHttpHeaders: true,
        }),
    ],
});

export default startServerAndCreateNextHandler(server, {
    context: async (
        req: NextApiRequest,
        _res: NextApiResponse
    ): Promise<GraphQlContextType> => {
        // get user's session
        const session = await getSession({ req });

        if (!session && env.NODE_ENV != "development") {
            throw AuthenticationError;
        }

        return { session, prisma };
    },
});
