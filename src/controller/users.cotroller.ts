import { Request, Response } from 'express';
import { IUserController, IUser } from '../interfaces';
import UserModel from '../models/user.model';
import faker from 'faker';

const controller: IUserController = {} as IUserController;

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

controller.createManyWithFaker = async (req: Request, res: Response): Promise<void> => {
  const userArray: Object[] = [];
  const quantity: number = +req.params.quantity

  for(let i=0; i < quantity; i++) {
    userArray.push({
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      phone: faker.phone.phoneNumber()
    })
  }

  try {
    const model: IUser = new UserModel();
    await model.collection.insertMany(userArray);
    res.status(201).json('Collection of users created successfully.');
  }
  catch (error: unknown) {
    res.status(400).json(error);
  }
}

controller.infiniteScroll = async (req: Request, res: Response): Promise<void> => {
  try {
    const count: number = req.query.count ? +req.query.count : 10;
    const page: number = req.query.page ? +req.query.page : 1;
    const models: IUser[] = await UserModel.find().skip(count * (page - 1)).limit(count);
    res.status(200).json(models);
  }
  catch(error) {
    res.status(400).json(error);
  }
}


export default controller;