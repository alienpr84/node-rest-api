import { Request, Response, NextFunction } from 'express';
import { ObjectSchema } from 'joi';

export default interface IJoi {
  validateData(schema: ObjectSchema): (req: Request, res: Response, next: NextFunction) => void | Response;
}
