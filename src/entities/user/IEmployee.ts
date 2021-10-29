import { IContract } from './../contract/IContract';
/* eslint-disable @typescript-eslint/no-empty-interface */
import { IUser } from './IUser';

export interface IEmployee extends IUser {
  contracts: IContract[];
}
