import {ChildEntity, Column} from "typeorm";
import {Ingredient} from "./Ingredient";


@ChildEntity()
export class Mixer extends Ingredient {
  @Column()
  mixerType: string;
}
