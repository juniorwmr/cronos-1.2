import { classToClass } from 'class-transformer';
import { Request, Response } from 'express';

import { FindEmployeeUseCase } from '@useCases/FindEmployee/FindEmployeeUseCase';

export class FindEmployeeController {
  constructor(private findEmployeeUseCase: FindEmployeeUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const employeeId = request?.user?.id;
    const query = request?.query;
    const employee = await this.findEmployeeUseCase.execute(query, employeeId);

    return response.status(200).json(classToClass(employee));
  }
}
