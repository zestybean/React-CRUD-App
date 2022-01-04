import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  TableInheritance,
} from "typeorm";

@Entity()
@TableInheritance({ column: { type: "varchar", name: "type" } })
export class Ingredient {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: "varchar",
    unique: true
  })
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

export default Ingredient;
