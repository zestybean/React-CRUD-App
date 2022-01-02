import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class MeasurementQty {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  measurement_amount: number;
}


