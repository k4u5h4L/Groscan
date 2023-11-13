import { idArg, intArg, nonNull, queryType, stringArg } from "nexus";
import { Test } from "./objectTypes/Test";
import { healthCheckQueryResolver } from "../resolvers/HealthCheckResolver";

export const Query = queryType({
    definition(t) {
        t.field("healthcheck", {
            type: Test,
            description: "Health Check GraphQL Query resolver.",
            args: {},
            resolve: healthCheckQueryResolver,
        });
    },
});
