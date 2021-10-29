import { Router, Request, Response } from 'express';
import { createContractController } from '@useCases/CreateContract';
import ContractValidation from '@helpers/validation/ContractValidation';

const contractsRoutes = Router();

contractsRoutes.post(
  '/',
  ContractValidation.create(),
  (request: Request, response: Response) =>
    createContractController.handle(request, response),
);

export { contractsRoutes };
