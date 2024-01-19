import { objectType } from "nexus";
import { User } from "./User";
import type { GraphQlContextType } from "~/@types/GraphQL";

export const Category = objectType({
    name: "Category",
    definition(t) {
        t.string("id");
        t.string("name");
        t.string("desc");
        t.string("icon");
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
        t.field("groceries", {
            type: User,
            resolve: async (parent, args, ctx: GraphQlContextType, _info) => {
                return await ctx.prisma.grocery.findFirst({
                    where: {
                        categories: {
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
