import { idArg, intArg, nonNull, queryType, stringArg } from "nexus";
import { Test } from "./objectTypes/Test";
import { healthCheckQueryResolver } from "../resolvers/HealthCheckResolver";
import { Grocery } from "./objectTypes/Grocery";
import { getUserGroceriesResolver } from "../resolvers/Grocery/GetUserGroceriesResolver";
import { Category } from "./objectTypes";
import { getUserCategoriesResolver } from "../resolvers/Category/GetUserCategoriesResolver";

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
                'Get all groceries of the user from the search string. Leave blank to get all. Expiry field takes "UPCOMING", "EXPIRED" and "ALL" values.',
            args: {
                page: intArg(),
                itemsPerPage: intArg(),
                search: stringArg(),
                expiry: nonNull(stringArg()),
            },
            resolve: getUserGroceriesResolver,
        });

        t.list.field("getUserCategories", {
            type: Category,
            description:
                "Get all categories of the user from the search string. Leave blank to get all.",
            args: {
                page: intArg(),
                itemsPerPage: intArg(),
                search: stringArg(),
            },
            resolve: getUserCategoriesResolver,
        });
    },
});
