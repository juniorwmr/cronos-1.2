import { classToClass } from 'class-transformer';
import { Request, Response } from 'express';

import { FindAdminUseCase } from '@useCases/FindAdmin/FindAdminUseCase';

export class FindAdminController {
  constructor(private findAdminUseCase: FindAdminUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const employeeId = request?.user?.id;
    const query = request?.query;
    const admin = await this.findAdminUseCase.execute(query, employeeId);

    return response.status(200).json(classToClass(admin));
  }
}
