import {Entity, Column, PrimaryGeneratedColumn, TableInheritance} from "typeorm";


@Entity()
@TableInheritance({ column: { type: "varchar", name: "type" } })
export abstract class Ingredient {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  
  @Column()
  name: string;

  @Column()
  producer: string;

  @Column()
  abv: number;

  // may or may not be applicable depending on the spirit/producer
  @Column()
  region: string;

  @Column()
  subregion: string;
  
  @Column()
  description: string;
}
