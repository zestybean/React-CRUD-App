"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const express_1 = __importDefault(require("express"));
const PORT = process.env.PORT || 3001;
const app = (0, express_1.default)();
const schema = new graphql_1.GraphQLSchema({
    query: new graphql_1.GraphQLObjectType({
        name: "RootQueryType",
        fields: {
            hello: {
                type: graphql_1.GraphQLString,
                resolve() {
                    return "world";
                },
            },
        },
    }),
});
const source = "{ hello }";
(0, graphql_1.graphql)({ schema, source }).then((result) => {
    // Prints
    // {
    //   data: { hello: "world" }
    // }
    // tslint:disable-next-line:no-console
    console.log(result);
});
app.get("/hello", (req, res) => {
    res.json({ message: "hello world!" });
});
app.listen(PORT, () => {
    // tslint:disable-next-line:no-console
    console.log(`Server listening on ${PORT}`);
});
//# sourceMappingURL=index.js.map