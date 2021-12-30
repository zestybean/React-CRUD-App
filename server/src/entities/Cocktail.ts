import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Cocktail {
  @PrimaryGeneratedColumn("uuid")
  id: string;
}
