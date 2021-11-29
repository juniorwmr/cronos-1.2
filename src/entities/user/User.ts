import {
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Exclude } from 'class-transformer';

export enum Genre {
  male = 1,
  female = 2,
  others = 3,
}

export abstract class User {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column()
  @Exclude()
  password: string;

  @Column({
    nullable: true,
  })
  name: string;

  @Column({
    nullable: true,
  })
  email: string;

  @Column({
    nullable: true,
    unique: true,
  })
  cpf: string;

  @Column({
    nullable: true,
  })
  education: string;

  @Column({
    name: 'pis_pasep',
    nullable: true,
    unique: true,
  })
  pisPasep: string;

  @Column({
    name: 'birth_date',
    type: 'date',
    nullable: true,
  })
  birthDate: Date;

  @Column({
    nullable: true,
    unique: true,
  })
  phone: string;

  @Column({
    default: true,
  })
  active?: boolean;

  @Column({
    type: 'enum',
    enum: Genre,
    default: Genre.others,
  })
  genre?: Genre;

  @CreateDateColumn({
    name: 'created_at',
  })
  createdAt?: Date;

  @UpdateDateColumn({
    name: 'updated_at',
  })
  updatedAt?: Date;
}
