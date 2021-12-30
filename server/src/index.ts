import "reflect-metadata";
import express, { Request, Response } from "express";
import { createConnection } from "typeorm";
import { Person } from "./entities/Person";

createConnection()
  .then(async (connection) => {
    const PORT = process.env.PORT || 3001;
    const app = express();

    app.post("/new_person", async (req: Request, res: Response) => {
      const person = new Person();
      person.name = "test";
      person.age = 24;
      person.wage = 32;
      person.position = "testing";

      // Writes to DB and outputs its ID
      await connection.manager.save(person).then((u) => {
        // tslint:disable-next-line:no-console
        console.log("Person saved with id of: ", u.id);
      });

      res.send(person);
    });

    app.listen(PORT, () => {
      // tslint:disable-next-line:no-console
      console.log(`Server listening on ${PORT}`);
    });

    // Returns all Person rows in the Person table
    const personRepo = connection.getRepository(Person);

    const savedpersons = await personRepo.find();
    // tslint:disable-next-line:no-console
    console.log("All persons in the DB: ", savedpersons);
  })
  // tslint:disable-next-line:no-console
  .catch((error) => console.log(error));
