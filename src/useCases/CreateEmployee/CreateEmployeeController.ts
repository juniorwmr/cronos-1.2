import { Request, Response } from 'express';

import { CreateEmployeeUseCase } from '@useCases/CreateEmployee/CreateEmployeeUseCase';
import { classToClass } from 'class-transformer';

export class CreateEmployeeController {
  constructor(private createEmployeeUseCase: CreateEmployeeUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const {
      name,
      email,
      password,
      cpf,
      birthDate,
      phone,
      genre,
      pisPasep,
      education,
    } = request.body;
    const newUser = await this.createEmployeeUseCase.execute({
      password,
      name,
      email,
      cpf,
      birthDate,
      phone,
      genre,
      pisPasep,
      education,
    });

    return response.status(201).json(classToClass(newUser));
  }
}
