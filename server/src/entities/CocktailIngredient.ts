import {
  PrimaryGeneratedColumn,
  Entity,
  ManyToOne,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { Cocktail, Ingredient, MeasurementQty, MeasurementUnit } from "./entities";

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
  @JoinColumn()
  ingredient: Ingredient;

  @OneToOne(() => MeasurementQty, {
           cascade: true
  })
  @JoinColumn()
  measurementQuantity: MeasurementQty;

  @OneToOne(() => MeasurementUnit, {
           cascade: true
  })
  @JoinColumn()
  measurementUnit: MeasurementUnit;
}

export default CocktailIngredient;
