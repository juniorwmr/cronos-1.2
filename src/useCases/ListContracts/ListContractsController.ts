import { classToClass } from 'class-transformer';
import { Request, Response } from 'express';

import { ListContractsUseCase } from '@useCases/ListContracts/ListContractsUseCase';

export class ListContractsController {
  constructor(private listContractsUseCase: ListContractsUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const employeeId = request?.user?.id;
    const employee = await this.listContractsUseCase.execute(employeeId);

    return response.status(200).json(classToClass(employee));
  }
}
