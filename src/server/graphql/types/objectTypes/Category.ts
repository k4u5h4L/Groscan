import { objectType } from "nexus";
import type { GraphQlContextType } from "~/@types/GraphQL";
import { Grocery } from "./Grocery";

export const Category = objectType({
    name: "Category",
    definition(t) {
        t.string("id");
        t.string("name");
        t.string("desc");
        t.string("icon");
        t.list.field("groceries", {
            type: Grocery,
            resolve: async (parent, args, ctx: GraphQlContextType, _info) => {
                return await ctx.prisma.grocery.findMany({
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
