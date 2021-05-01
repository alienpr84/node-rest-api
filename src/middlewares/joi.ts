import { ValidationResult, ObjectSchema } from 'joi';
import { Request, Response, NextFunction } from 'express';
import { IJoi } from '../interfaces';

const joiMiddleware: IJoi = {} as IJoi;

joiMiddleware.validateData = (schema: ObjectSchema) => {
  return (req: Request, res: Response, next: NextFunction): void | Response => {
    const result: ValidationResult = schema.validate({
      ...req.body,
      ...req.query,
      ...req.params
    });

    if(result.error) {
      return res.status(400).json(result.error.details[0].message);
    }

    req.body = result.value;
    next();
  }
}

export default joiMiddleware;