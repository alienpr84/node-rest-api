import { Request, Response } from 'express';
import { IBaseController, IUser } from '../interfaces';
import UserModel from '../models/user.model';

const controller: IBaseController = {} as IBaseController;

controller.create = async (req: Request, res: Response): Promise<void> => {
  const model: IUser = new UserModel(req.body);
  try {
    await model.save();
    res.status(201).json('User created successfully.');
  } catch (error) {
    res.status(400).json(error.message);
  }
}

controller.get = async (req: Request, res: Response): Promise<void> => {
  try {
    const models: IUser[] = await UserModel.find();
    res.status(200).json(models);
  } catch (error) {
    res.status(400).json(error.message);
  }
}

controller.getById = async (req: Request, res: Response): Promise<void> => {
  try {
    const model: IUser = await UserModel.findById(req.params.id) || {} as IUser;
    res.status(200).json(model);
  } catch (error) {
    res.status(400).json(error.message);
  }
}

controller.update = async (req: Request, res: Response): Promise<void> => {
  try {
    await UserModel.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json('User updated successfully.')
  } catch (error) {
    res.status(400).json(error.message);
  }
}

controller.delete = async (req: Request, res: Response): Promise<void> => {
  try {
    await UserModel.findByIdAndDelete(req.params.id);
    res.status(200).json('User deleted successfully.')
  } catch (error) {
    res.status(400).json(error.message);
  }
}

export default controller;