import { Request } from 'express';

export interface ITokenValidation {
  validate(request: Request): string;
}
