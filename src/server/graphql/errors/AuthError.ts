import { GraphQLError } from "graphql";

const AuthenticationError = new GraphQLError(
    "You do not seem to be logged in.",
    {
        extensions: {
            code: "FORBIDDEN",
        },
    }
);

export { AuthenticationError };
