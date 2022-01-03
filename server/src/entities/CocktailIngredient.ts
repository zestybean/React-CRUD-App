import {
  PrimaryGeneratedColumn,
  Entity,
  ManyToOne,
  OneToOne,
  JoinTable,
} from "typeorm";
import { Cocktail } from "./Cocktail";
import { Ingredient } from "./Ingredient";
import { MeasurementQty } from "./MeasurementQty";
import { MeasurementUnit } from "./MeasurementUnit";

@Entity()
export class CocktailIngredient {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Cocktail, (cocktail) => cocktail.ingredients, {
            cascade: ['insert', 'update']
  })
  cocktail: Cocktail;

  @OneToOne(() => Ingredient, {
           cascade: true
  })
  @JoinTable()
  ingredient: Ingredient;

  @OneToOne(() => MeasurementQty, {
           cascade: true
  })
  @JoinTable()
  measurementQuantity: MeasurementQty;

  @OneToOne(() => MeasurementUnit, {
           cascade: true
  })
  @JoinTable()
  measurementUnit: MeasurementUnit;
}

export default CocktailIngredient;
