import { Request, Response } from 'express';
import { IBaseController } from ".";

export default interface ICRMContactsController extends IBaseController {
  createManyWithFaker: (req: Request, res: Response) => Promise<void>
}