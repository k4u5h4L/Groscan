export const PossibleValues = ["UPCOMING", "EXPIRED", "ALL"] as const;

export type ExpiryType = (typeof PossibleValues)[number];

export const getExpiryFlag = (expiryString: string): ExpiryType => {
    return PossibleValues.find((val) => val == expiryString)!;
};
