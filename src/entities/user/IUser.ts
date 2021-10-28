import { Genre } from './User';

export interface IUser {
  id?: string;
  password: string;
  name: string;
  email: string;
  cpf: string;
  education: string;
  pisPasep: string;
  birthDate: Date;
  genre: Genre;
  phone: string;
  active?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
