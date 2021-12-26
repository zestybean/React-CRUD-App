"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const typeorm_1 = require("typeorm");
const Users_1 = require("./entities/Users");
(0, typeorm_1.createConnection)().then((connection) => __awaiter(void 0, void 0, void 0, function* () {
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
    app.post("/new_user", (req, res) => {
        const user = new Users_1.User();
        user.name = 'test';
        user.age = 24;
        user.wage = 32;
        user.position = 'testing';
        connection.manager.save(user);
        res.send(user);
    });
    app.listen(PORT, () => {
        // tslint:disable-next-line:no-console
        console.log(`Server listening on ${PORT}`);
    });
    // tslint:disable-next-line:no-console
})).catch(error => console.log(error));
//# sourceMappingURL=index.js.map