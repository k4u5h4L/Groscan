import { floatArg, intArg, mutationType, nonNull, stringArg } from "nexus";
import { Test } from "./objectTypes/Test";
import { healthCheckMutationResolver } from "../resolvers/HealthCheckResolver";

export const Mutation = mutationType({
    definition(t) {
        t.field("healthcheck", {
            type: Test,
            description: "Health Check GraphQL Mutation resolver..",
            args: {},
            resolve: healthCheckMutationResolver,
        });
    },
});
