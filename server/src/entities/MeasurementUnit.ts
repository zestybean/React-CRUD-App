import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class MeasurementUnit {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  measurementUnit: string;
}
