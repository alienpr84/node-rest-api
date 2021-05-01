import { Request, Response} from 'express';
import { IBaseController, ICategory, IProduct } from '../interfaces';
import { ProductModel, CategoryModel } from '../models';

const controller: IBaseController = {} as IBaseController;

controller.create = async (req: Request, res: Response): Promise<void> => {
  const model: IProduct = new ProductModel(req.body);
  console.log('body', req.body)

  try {
    await model.save(async function(err){
      if(err) return err;

      const category: ICategory = await CategoryModel.findById(model.categoryOwner) || {} as ICategory;
      category.products.push(model._id);
      category.save();
    });
    res.status(201).json('Product created successfully.');
  } catch (error) {
    res.status(400).json(error.message)
  }
}

controller.get = async (req: Request, res: Response): Promise<void> => {
  try {
    const models: IProduct[] = await ProductModel.find();
    res.status(200).json(models);
  } catch (error) {
    res.status(400).json(error.message);
  }
}

controller.getById = async (req: Request, res: Response): Promise<void> => {
  try {
    const model: IProduct = await ProductModel.findById(req.params.id) || {} as IProduct;
    res.status(200).json(model);
  } catch (error) {
    res.status(400).json(error.message);
  }
}

controller.update = async (req: Request, res: Response): Promise<void> => {
  try {
    await ProductModel.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json('Product updated successfully.');
  } catch (error) {
    res.status(400).json(error.message);
  }
}

controller.delete = async (req: Request, res: Response): Promise<void> => {
  try {
    await ProductModel.findByIdAndDelete(req.params.id);
    res.status(200).json('Product deleted successfully.');
  } catch (error) {
    res.status(400).json(error.message);
  }
}

export default controller;