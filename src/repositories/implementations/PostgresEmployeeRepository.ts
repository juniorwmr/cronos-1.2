import { EntityRepository, Repository } from 'typeorm';
import { IEmployeeRepository } from '@repositories/IEmployeeRepository';
import { Employee } from '@entities/user';

@EntityRepository(Employee)
export class PostgresEmployeeRepository implements IEmployeeRepository {
  constructor(private employeesRepository: Repository<Employee>) {}

  async findByEmail(email: string): Promise<Employee | null> {
    const employee = await this.employeesRepository.findOne({ email });

    return employee;
  }

  async findByCPF(cpf: string): Promise<Employee | null> {
    const employee = await this.employeesRepository.findOne({ cpf });

    return employee;
  }

  async saveEmployee(data: Employee): Promise<Employee> {
    const newEmployee = this.employeesRepository.create(data);
    const employee = await this.employeesRepository.save(newEmployee);

    return employee;
  }

  async find(): Promise<Employee[]> {
    const employees = await this.find();

    return employees;
  }

  async findById(id: string): Promise<Employee | null> {
    const employee = await this.employeesRepository.findOne(id);

    return employee;
  }
}
