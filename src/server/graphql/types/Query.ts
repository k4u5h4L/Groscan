import { idArg, intArg, nonNull, queryType, stringArg } from "nexus";
import { Test } from "./objectTypes/Test";
import { healthCheckQueryResolver } from "../resolvers/HealthCheckResolver";
import { Grocery } from "./objectTypes/Grocery";
import { getUserGroceriesResolver } from "../resolvers/Grocery/GetUserGroceriesResolver";

export const Query = queryType({
    definition(t) {
        t.field("healthcheck", {
            type: Test,
            description: "Health Check GraphQL Query resolver.",
            args: {},
            resolve: healthCheckQueryResolver,
        });

        t.list.field("getUserGroceries", {
            type: Grocery,
            description:
                "Get all groceries of the user from the search string. Leave blank to get all.",
            args: {
                page: intArg(),
                itemsPerPage: intArg(),
                search: stringArg(),
                expiry: stringArg(),
            },
            resolve: getUserGroceriesResolver,
        });
    },
});
