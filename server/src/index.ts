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

    app.post("/new_person", async (_req: Request, res: Response) => {
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

    // LAST POST
    app.post("/make_cock", async (_req: Request, res: Response) => {
      const cocktail = new Cocktail();
      const liquor = new Liquor();
      liquor.age = 12;
      liquor.name = "Kettel One";
      liquor.abv = 12;
      liquor.type = "vodka";
      liquor.region = "Russia";
      liquor.subregion = "Moscow";
      liquor.producer = "Kettel One Imports";
      liquor.description = "Mmm, delicious kettel one";
      const unit = new MeasurementUnit();
      unit.measurementUnit = "Oz.";
      const qty = new MeasurementQty();
      qty.measurementAmount = 2;
      const cocking = new CocktailIngredient();
      cocking.measurementUnit = unit;
      cocking.measurementQuantity = qty;
      cocking.ingredient = liquor;
      cocktail.ingredients = [cocking];
      cocktail.name = "voka";
      cocktail.notes = "tastes like shit";
      cocktail.instructions = "pour the vodka into the cup";

      await connection.manager.save(cocktail).then((q) => {
        // tslint:disable-next-line:no-console
        console.log(`cocktail with id ${ q.id } added`);
      });
      res.send(cocktail);
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
