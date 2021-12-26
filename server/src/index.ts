import {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';
import 'reflect-metadata';
import express, {Request, Response} from 'express';
import { createConnection } from 'typeorm';
import { User } from './entities/Users';

createConnection().then(async connection => {
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

  app.get("/hello", (req: Request, res: Response) => {
    res.json({ message: "hello world!" });
  });

  app.post("/new_user", (req: Request, res: Response) => {
    const user = new User();
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
}).catch(error => console.log(error));
