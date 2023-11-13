import { objectType } from "nexus";

export const Test = objectType({
    name: "Test",
    definition(t) {
        t.string("message");
    },
});
