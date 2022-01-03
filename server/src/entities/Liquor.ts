import { Column, ChildEntity } from "typeorm";
import { Ingredient } from "./Ingredient";

@ChildEntity()
export class Liquor extends Ingredient {
  // tequila, rum, whiskey, etc
  @Column()
  liquorType: string;

  // bourbon, anejo, sctoch, etc
  @Column()
  subtype: string;

  @Column()
  age: number;
}

export default Liquor;
