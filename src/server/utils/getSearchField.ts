type ReturnType = { search: string; status: boolean };

/**
 * Cleans the search string, and checks if it has any value in it.
 * @param search The search string.
 * @returns An object with a search string, and a status boolean.
 */
export const getSearchField = (search: string): ReturnType => {
    try {
        return { search: search.trim(), status: !!search };
    } catch (err) {
        return { search: search, status: false };
    }
};
