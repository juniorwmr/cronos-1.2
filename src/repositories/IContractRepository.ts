import { Employee } from '@entities/user';
import { Contract } from '@entities/contract';

export interface IContractRepository {
  findByRegistration(registration: string): Promise<Contract | null>;
  findByCity(city: string): Promise<Contract[] | null>;
  findByEmployeeId(employeeId: string): Promise<Contract[]>;
  find(): Promise<Contract[]>;
  findById(id: string): Promise<Contract | null>;
  saveContract(data: Contract, employee: Employee): Promise<Contract>;
}
