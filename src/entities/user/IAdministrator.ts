import { IUser } from './IUser';

export interface IAdministrator extends IUser {
  type: string;
}
