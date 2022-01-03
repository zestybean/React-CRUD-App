import "reflect-metadata";
import express, { Request, Response } from "express";
import { createConnection } from "typeorm";
import { Person } from "./entities/Person";
import {
  Cocktail,
  CocktailIngredient,
  MeasurementUnit,
  MeasurementQty,
  Liquor,
} from "./entities";

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

    app.post("/make_qty", async (req: Request, res: Response) => {
      const qty = new MeasurementQty();
    });

    app.post("/make_unit", async (req: Request, res: Response) => {
      const unit = new MeasurementUnit();
    });

    app.post("/make_unit", async (req: Request, res: Response) => {
      const liquor = new Liquor();
    });

    app.post("/make_cocking", async (req: Request, res: Response) => {
      const cocking = new CocktailIngredient();
    });

    // LAST POST
    app.post("/make_cock", async (req: Request, res: Response) => {
      const cocktail = new Cocktail();
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
