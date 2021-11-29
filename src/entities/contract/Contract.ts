import { Employee } from '@entities/user';
import { Transform } from 'class-transformer';
import {
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Entity,
  ManyToOne,
} from 'typeorm';

export enum ITypeContract {
  effective = 1,
  temporary = 2,
}

export enum ISituationContract {
  working = 1,
  leased = 2,
  away = 3,
  dismissed = 4,
}

@Entity('contracts')
export class Contract {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column()
  registration: string;

  @Column({
    type: 'date',
    nullable: false,
  })
  admission: Date;

  @Column({
    nullable: true,
  })
  city: string;

  @Column({
    type: 'enum',
    enum: ITypeContract,
    default: ITypeContract.temporary,
  })
  type: ITypeContract;

  @Column({
    type: 'enum',
    enum: ISituationContract,
    default: ISituationContract.working,
  })
  situation: ISituationContract;

  @Column({
    nullable: false,
  })
  contract: number;

  @ManyToOne(() => Employee, employee => employee.contracts)
  employee?: Employee;

  @CreateDateColumn({
    name: 'created_at',
  })
  createdAt?: Date;

  @UpdateDateColumn({
    name: 'updated_at',
  })
  updatedAt?: Date;
}
