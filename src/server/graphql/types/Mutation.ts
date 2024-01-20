import { floatArg, intArg, mutationType, nonNull, stringArg } from "nexus";
import { Test } from "./objectTypes/Test";
import { healthCheckMutationResolver } from "../resolvers/HealthCheckResolver";
import { Grocery } from "./objectTypes";
import { addGroceryResolver } from "../resolvers/Grocery/AddGroceryResolver";

export const Mutation = mutationType({
    definition(t) {
        t.field("healthcheck", {
            type: Test,
            description: "Health Check GraphQL Mutation resolver..",
            args: {},
            resolve: healthCheckMutationResolver,
        });

        t.field("addGrocery", {
            type: Grocery,
            description: "Add a new grocery for the user.",
            args: {
                barcode: nonNull(stringArg()),
                name: nonNull(stringArg()),
                desc: nonNull(stringArg()),
                image: stringArg(),
                manufactured: stringArg(),
                expiry: nonNull(stringArg()),
            },
            resolve: addGroceryResolver,
        });
    },
});
