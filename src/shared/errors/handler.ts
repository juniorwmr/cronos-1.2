import { ErrorRequestHandler, Request, Response, NextFunction } from 'express';
import { AppError } from './AppError';

const errorHandler: ErrorRequestHandler = (
  error: Error,
  request: Request,
  response: Response,
  _next: NextFunction,
) => {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: 'error',
      message: error.message,
    });
  }

  return response.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
};

export default errorHandler;
