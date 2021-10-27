import 'dotenv/config';
import 'module-alias/register';
import 'express-async-errors';

import express from 'express';
import cors from 'cors';
import errorHandler from '@shared/errors/handler';
import { errors as celebrateErrors } from 'celebrate';

import { routes } from './routes';
import '../mongoose/index';

class App {
  public express = express();

  public constructor() {
    this.middlewares();
    this.router();
    this.errors();
  }

  private middlewares(): void {
    this.express.use(express.json());
    this.express.use(cors());
  }

  private router(): void {
    this.express.use(routes);
  }

  private errors(): void {
    this.express.use(celebrateErrors());
    this.express.use(errorHandler);
  }
}

export default new App().express;
