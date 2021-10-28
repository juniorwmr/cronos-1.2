import { Request, Response } from 'express';

import { CreateEmployeeUseCase } from '@useCases/CreateEmployee/CreateEmployeeUseCase';

export class CreateEmployeeController {
  constructor(private createEmployeeUseCase: CreateEmployeeUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, password, cpf, birthDate, phone, genre } =
      request.body;
    const user = await this.createEmployeeUseCase.execute({
      password,
      name,
      email,
      cpf,
      birthDate,
      phone,
      genre,
    });

    return response.status(201).json(user);
  }
}
