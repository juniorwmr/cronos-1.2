import { Request, Response } from 'express';

import { CreateContractUseCase } from '@useCases/CreateContract/CreateContractUseCase';
import { classToClass } from 'class-transformer';
import { handlePostgresDate } from '@utils/handlePostgresDate';

export class CreateEmployeeController {
  constructor(private createContractUseCase: CreateContractUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const {
      registration,
      admission,
      city,
      type,
      situation,
      contract,
      employeeId,
    } = request.body;
    const newContract = await this.createContractUseCase.execute({
      registration,
      admission,
      city,
      type,
      situation,
      contract,
      employeeId,
    });

    return response.status(201).json(classToClass(newContract));
  }
}
