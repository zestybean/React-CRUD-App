import {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";
import express from "express";

const PORT = process.env.PORT || 3001;
const app = express();

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
      hello: {
        type: GraphQLString,
        resolve() {
          return "world";
        },
      },
    },
  }),
});

const source = "{ hello }";

graphql({ schema, source }).then((result) => {
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
