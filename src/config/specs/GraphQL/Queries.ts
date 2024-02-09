import { gql } from "@apollo/client";

export const GET_USER_GROCERIES = gql`
    query GetUserGroceries(
        $page: Int
        $itemsPerPage: Int
        $search: String
        $expiry: String!
    ) {
        getUserGroceries(
            page: $page
            itemsPerPage: $itemsPerPage
            search: $search
            expiry: $expiry
        ) {
            barcode
            desc
            expiry
            id
            image
            manufactured
            name
            status
        }
    }
`;

export const GET_USER_CATEGORIES = gql`
    query GetUserCategories($page: Int, $itemsPerPage: Int, $search: String) {
        getUserCategories(
            page: $page
            itemsPerPage: $itemsPerPage
            search: $search
        ) {
            desc
            icon
            id
            name
        }
    }
`;
