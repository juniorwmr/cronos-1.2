import { Employee } from '@entities/user';

export interface IEmployeeRepository {
  findByEmail(email: string): Promise<Employee | null>;
  findByCPF(cpf: string): Promise<Employee | null>;
  saveEmployee(employee: Employee): Promise<Employee>;
  updateEmployee(employee: Employee): Promise<Employee>;
  find(): Promise<Employee[]>;
  findById(id: string): Promise<Employee | null>;
}
