import { GraphQLError } from "graphql";

const InvalidInputError = new GraphQLError(
    "The data you passed in is not of the right format",
    {
        extensions: {
            code: "BAD_USER_INPUT",
        },
    }
);

export { InvalidInputError };
