import { ISituationContract, ITypeContract } from '@entities/contract/Contract';

export interface CreateContractDTO {
  registration: string;
  admission: Date;
  city: string;
  type: ITypeContract;
  situation: ISituationContract;
  contract: number;
  employeeId: string;
}
