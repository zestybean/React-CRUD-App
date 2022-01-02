import { PrimaryGeneratedColumn, Entity, ManyToOne, OneToOne, JoinTable } from "typeorm";
import {Cocktail} from "./Cocktail";
import {Ingredient} from "./Ingredient";
import {MeasurementQty} from "./MeasurementQty";
import {MeasurementUnit} from "./MeasurementUnit";

@Entity()
export class CocktailIngredient {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Cocktail, cocktail => cocktail.ingredients)
  cocktail: Cocktail;

  @OneToOne(() => Ingredient)
  @JoinTable()
  ingredient: Ingredient;

  @OneToOne(() => MeasurementQty)
  @JoinTable()
  measurementQuantity: MeasurementQty;

  @OneToOne(() => MeasurementUnit)
  @JoinTable()
  measurementUnit: MeasurementUnit;
}
