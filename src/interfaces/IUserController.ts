import { Request, Response } from 'express';
import { IBaseController } from ".";

export default interface IUserController extends IBaseController {
  createManyWithFaker: (req: Request, res: Response) => Promise<void>
  infiniteScroll: (req: Request, res: Response) => Promise<void>
}