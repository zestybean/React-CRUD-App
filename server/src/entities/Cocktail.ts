import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { CocktailIngredient } from "./CocktailIngredient";

@Entity()
export class Cocktail {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @OneToMany(() => CocktailIngredient, (ingredient) => ingredient.cocktail, {
    cascade: true
  })
  ingredients: CocktailIngredient[];

  @Column()
  instructions: string;

  @Column()
  notes: string;
}

export default Cocktail;
