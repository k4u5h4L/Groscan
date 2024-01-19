type ReturnType = { skip: number; take: number };

export const getPagination = (
    page: number,
    itemsPerPage: number
): ReturnType => {
    if (!page || !itemsPerPage) {
        return { skip: 0, take: 10 };
    } else {
        return {
            skip: (page - 1) * itemsPerPage,
            take: itemsPerPage,
        };
    }
};
