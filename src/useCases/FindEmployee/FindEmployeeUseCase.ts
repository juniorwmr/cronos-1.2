import { Employee } from '@entities/user';

import { IEmployeeRepository } from '@repositories/IEmployeeRepository';
import { FindEmployeeDTO } from './FindEmployeeDTO';

export class FindEmployeeUseCase {
  constructor(private employeesRepository: IEmployeeRepository) {}

  async execute(
    { email, cpf, id }: FindEmployeeDTO,
    employeeId?: string,
  ): Promise<Employee> {
    let employee: Employee;
    if (email) {
      employee = await this.employeesRepository.findByEmail(email);
    } else if (cpf) {
      employee = await this.employeesRepository.findByCPF(cpf);
    } else if (id) {
      employee = await this.employeesRepository.findById(id);
    } else {
      if (employeeId) {
        employee = await this.employeesRepository.findById(employeeId);
      } else {
        employee = null;
      }
    }

    return employee;
  }
}
