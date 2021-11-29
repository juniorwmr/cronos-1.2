import { classToClass } from 'class-transformer';
import { Request, Response } from 'express';

import { ListEmployeesUseCase } from '@useCases/ListEmployees/ListEmployeesUseCase';

export class ListEmployeesController {
  constructor(private listEmployeesUseCase: ListEmployeesUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const employees = await this.listEmployeesUseCase.execute();

    return response.status(200).json(classToClass(employees));
  }
}
