import { Genre } from './User';

export interface IUser {
  id?: string;
  password: string;
  name: string;
  email: string;
  cpf: string;
  birthDate: Date;
  genre: Genre;
  phone: string;
  active?: boolean;
  created_at?: Date;
  updated_at?: Date;
}
