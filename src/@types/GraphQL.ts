import type { PrismaClient } from "@prisma/client";
import type { Session } from "next-auth";

export type GraphQlContextType = {
    session: Session | null;
    prisma: PrismaClient;
};
