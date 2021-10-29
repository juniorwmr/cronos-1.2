import { Contract } from './../contract/Contract';
import { Entity, OneToMany } from 'typeorm';
import { User } from './User';

@Entity('employees')
export class Employee extends User {
  @OneToMany(() => Contract, contract => contract.employee)
  contracts?: Contract[];
}
