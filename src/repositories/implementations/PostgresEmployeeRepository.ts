import { EntityRepository, Repository } from 'typeorm';
import { IEmployeeRepository } from '@repositories/IEmployeeRepository';
import { Employee } from '@entities/user';

@EntityRepository(Employee)
export class PostgresEmployeeRepository implements IEmployeeRepository {
  constructor(private employeesRepository: Repository<Employee>) {}

  async findByEmail(email: string): Promise<Employee | null> {
    return await this.employeesRepository.findOne({ email });
  }

  async findByCPF(cpf: string): Promise<Employee | null> {
    return await this.employeesRepository.findOne({ cpf });
  }

  async saveEmployee(data: Employee): Promise<Employee> {
    const newEmployee = this.employeesRepository.create(data);
    return await this.employeesRepository.save(newEmployee);
  }

  async updateEmployee(employee: Employee): Promise<Employee> {
    return await this.employeesRepository.save(employee);
  }

  async find(): Promise<Employee[]> {
    return await this.employeesRepository.find();
  }

  async findById(id: string): Promise<Employee | null> {
    return await this.employeesRepository.findOne(id);
  }
}
