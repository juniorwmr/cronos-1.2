import { AppError } from '@shared/errors/AppError';
import { Employee } from '@entities/user';

import { IEmployeeRepository } from '@repositories/IEmployeeRepository';
import { CreateEmployeeDTO } from './CreateEmployeeDTO';
import { ICryptographyBcrypt } from '@shared/cryptography/ICryptography';

export class CreateEmployeeUseCase {
  constructor(
    private employeesRepository: IEmployeeRepository,
    private cryptographyBcrypt: ICryptographyBcrypt,
  ) {}

  async execute(data: CreateEmployeeDTO): Promise<Employee> {
    const employeeAlreadyExists = await this.employeesRepository.findByEmail(
      data.email,
    );

    if (employeeAlreadyExists) {
      throw new AppError('Employee already exists.', 404);
    }

    const passwordHash = await this.cryptographyBcrypt.hash(data.password);

    data.password = passwordHash;

    return await this.employeesRepository.saveEmployee(data);
  }
}
