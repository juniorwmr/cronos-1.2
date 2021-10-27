/* eslint-disable @typescript-eslint/no-unused-vars */
import { Company } from '@entities/company/Company';
import { IUserTypes } from '@entities/user/User';

declare global {
  namespace Express {
    export interface Request {
      user: {
        id: string;
        type: string;
      };
    }
  }
}
