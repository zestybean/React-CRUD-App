import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Beer {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  producer: string;

  // stout, ipa, sour, etc.
  @Column()
  style: string;

  // imperial stout, double ipa, etc.
  @Column()
  substyle: string;

  @Column()
  abv: number;

  // country of origin
  @Column()
  region: string;

  // more specifically, where?
  @Column()
  subregion: string;
}
