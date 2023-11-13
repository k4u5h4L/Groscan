import type { GraphQlContextType } from "~/@types/GraphQL";
import type { FieldResolver } from "nexus";

export const healthCheckQueryResolver: FieldResolver<"Query", "Test"> = async (
    _root,
    _args,
    _ctx: GraphQlContextType
) => {
    return { message: "Query Health check passed!" };
};

export const healthCheckMutationResolver: FieldResolver<
    "Mutation",
    "Test"
> = async (_root, _args, _ctx: GraphQlContextType) => {
    return { message: "Mutation Health check passed!" };
};
