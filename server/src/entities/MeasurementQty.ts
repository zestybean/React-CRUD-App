import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class MeasurementQty {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  measurementAmount: number;
}


