/**
 * Formats the data is a nice way.
 * @param date The given date format.
 * @returns The formatted date string.
 */
export const formatDate = (date: Date): string => {
    return new Intl.DateTimeFormat("default", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    }).format(date);
};
