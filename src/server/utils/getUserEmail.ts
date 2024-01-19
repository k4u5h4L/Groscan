import type { GraphQlContextType } from "~/@types/GraphQL";
import { env } from "~/env.mjs";

export const getUserEmail = (ctx: GraphQlContextType): string => {
    if (process.env.NODE_ENV == "development") {
        return ctx.session?.user?.email ?? env.TESTING_EMAIL;
    } else {
        return ctx.session?.user?.email ?? "NA";
    }
};
