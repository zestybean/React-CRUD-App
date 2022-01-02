import { ChildEntity, Column } from "typeorm";
import {Ingredient} from "./Ingredient";

@ChildEntity()
export class Wine extends Ingredient{
  // year
  @Column()
  vintage: number;

 // pinot noir, red blend, etc
  @Column()
  variety: string;

  // producers name for the wine
  @Column()
  designation: string;

  // the physical location where the grapes are from
  // not present for every wine
  @Column()
  vineyard: string;

  // legal name of the wine (champagne, bourdoux, etc.)
  @Column()
  appelation: string;
}
