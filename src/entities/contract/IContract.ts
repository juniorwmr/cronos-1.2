import { IEmployee } from './../user/IEmployee';
import { ITypeContract, ISituationContract } from './Contract';

export interface IContract {
  id?: string;
  registration: string;
  admission: Date;
  city: string;
  type: ITypeContract;
  situation: ISituationContract;
  contract: number;
  employee?: IEmployee;
  createdAt?: Date;
  updatedAt?: Date;
}
