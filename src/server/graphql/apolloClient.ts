import {
    InMemoryCache,
    ApolloClient,
    HttpLink,
    type NormalizedCacheObject,
} from "@apollo/client";
import { env } from "~/env.mjs";

let apolloClient: ApolloClient<NormalizedCacheObject>;

function createApolloClient() {
    return new ApolloClient({
        link: new HttpLink({
            uri: env.NEXT_PUBLIC_APOLLO_CLIENT_URL + "/api/graphql",
        }),
        cache: new InMemoryCache(),
    });
}

function initializeApollo() {
    apolloClient = apolloClient ?? createApolloClient();
    return apolloClient;
}

export function useApollo() {
    return initializeApollo();
}
