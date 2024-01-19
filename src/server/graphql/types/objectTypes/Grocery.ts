import { objectType } from "nexus";
import { User } from "./User";
import type { GraphQlContextType } from "~/@types/GraphQL";
import { Category } from "./Category";

export const Grocery = objectType({
    name: "Grocery",
    definition(t) {
        t.string("id");
        t.string("barcode");
        t.string("name");
        t.string("desc");
        t.string("status");
        t.string("image");
        t.string("manufactured");
        t.string("expiry");
        t.field("user", {
            type: User,
            resolve: async (parent, args, ctx: GraphQlContextType, _info) => {
                return await ctx.prisma.user.findFirst({
                    where: {
                        Grocery: {
                            some: {
                                id: parent.id,
                            },
                        },
                    },
                });
            },
        });
        t.field("categories", {
            type: Category,
            resolve: async (parent, args, ctx: GraphQlContextType, _info) => {
                return await ctx.prisma.category.findFirst({
                    where: {
                        groceries: {
                            some: {
                                id: parent.id,
                            },
                        },
                    },
                });
            },
        });
    },
});
