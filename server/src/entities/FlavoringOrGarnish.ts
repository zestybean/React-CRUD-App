import { ChildEntity, Column } from "typeorm";
import { Ingredient } from "./Ingredient";

@ChildEntity()
export class FlavoringOrGarnish extends Ingredient {
  @Column()
  flavoringOrGarnishType: string;
}

export default FlavoringOrGarnish;
