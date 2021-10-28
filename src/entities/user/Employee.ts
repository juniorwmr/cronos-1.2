import { Entity } from 'typeorm';
import { User } from './User';

@Entity('employees')
export class Employee extends User {}
