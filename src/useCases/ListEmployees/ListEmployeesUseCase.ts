import { Employee } from '@entities/user';

import { IEmployeeRepository } from '@repositories/IEmployeeRepository';

export class ListEmployeesUseCase {
  constructor(private employeesRepository: IEmployeeRepository) {}

  async execute(): Promise<Employee[]> {
    const employees = await this.employeesRepository.find();

    return employees;
  }
}
