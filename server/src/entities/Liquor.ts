import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Liquor {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  producer: string;

  // tequila, rum, whiskey, etc
  @Column()
  type: string;

  // bourbon, anejo, sctoch, etc
  @Column()
  subtype: string;

  @Column()
  age: number;

  @Column()
  abv: number;

  // may or may not be applicable depending on the spirit/producer
  @Column()
  region: string;

  @Column()
  subregion: string;
}
