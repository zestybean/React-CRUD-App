import { Column, ChildEntity } from "typeorm";
import {Ingredient} from "./Ingredient";

@ChildEntity()
export class Beer extends Ingredient {
  // stout, ipa, sour, etc.
  @Column()
  style: string;

  // imperial stout, double ipa, etc.
  @Column()
  substyle: string;
 }
