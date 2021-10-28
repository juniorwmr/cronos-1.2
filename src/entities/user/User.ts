import {
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Exclude, Transform } from 'class-transformer';

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

  @Transform(({ value }) =>
    value ? value.toString().split('-').reverse().join('/') : null,
  )
  @Column({
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

  @CreateDateColumn()
  created_at?: Date;

  @UpdateDateColumn()
  updated_at?: Date;
}
