import { Request, Response } from "express";
import { IBaseController } from ".";

export default interface ICategoryController extends IBaseController {
  getAsociatedProducts(req: Request, res: Response): Promise<void>
}