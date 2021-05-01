import { Request, Response} from 'express';
import { IBaseController, ICategory } from '../interfaces';
import CategoryModel from '../models/category.model';


const controller: IBaseController = {} as IBaseController;

controller.create = async (req: Request, res: Response): Promise<void> => {
  const model: ICategory = new CategoryModel(req.body);

  try {
    await model.save();
    res.status(201).json('Category created successfully.');
  } catch (error) {
    res.status(400).json(error.message)
  }
}

controller.get = async (req: Request, res: Response): Promise<void> => {
  console.log('hey how are you')
  try {
    const models: ICategory[] = await CategoryModel.find();
    res.status(200).json(models);
  } catch (error) {
    res.status(400).json(error.message);
  }
}

controller.getById = async (req: Request, res: Response): Promise<void> => {
  try {
    const model: ICategory = await CategoryModel.findOne({_id:req.params.id}).populate("products") || {} as ICategory;
    res.status(200).json(model);
  } catch (error) {
    res.status(400).json(error.message);
  }
}

controller.update = async (req: Request, res: Response): Promise<void> => {
  try {
    await CategoryModel.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json('Category updated successfully.');
  } catch (error) {
    res.status(400).json(error.message);
  }
}

controller.delete = async (req: Request, res: Response): Promise<void> => {
  try {
    await CategoryModel.findByIdAndDelete(req.params.id);
    res.status(200).json('Category deleted successfully.');
  } catch (error) {
    res.status(400).json(error.message);
  }
}

export default controller;