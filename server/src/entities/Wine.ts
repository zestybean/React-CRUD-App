import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Wine {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  // year
  @Column()
  vintage: number;

  // red or white or rose or etc.
  @Column()
  type: string;

  // who makes the wine
  @Column()
  producer: string;

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

  @Column()
  country: string;

  @Column()
  region: string;

  @Column()
  subregion: string;

  // legal name of the wine (champagne, bourdoux, etc.)
  @Column()
  appelation: string;

  @Column()
  abv: number;

  @Column()
  tastingNotes: string;
}
