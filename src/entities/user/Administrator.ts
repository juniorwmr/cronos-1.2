import { Column, Entity } from 'typeorm';
import { User } from './User';

@Entity('administrators')
export class Administrator extends User {
  @Column({
    default: 'admin',
  })
  type: 'admin';
}
