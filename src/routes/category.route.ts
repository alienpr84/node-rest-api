import { Router } from 'express';
import { CategoriesController } from '../controller';
import { joiMiddleware } from '../middlewares';
import { categorySchema } from '../schemas';

export default function categoryRouter(router: Router): void {
  router
    .post('/categories', joiMiddleware.validateData(categorySchema.create), CategoriesController.create)
    .get('/categories', CategoriesController.get)
    .get('/categories/:id',joiMiddleware.validateData(categorySchema.getById), CategoriesController.getById)
    .put('/categories/:id',joiMiddleware.validateData(categorySchema.update), CategoriesController.update)
    .delete('/categories/:id',joiMiddleware.validateData(categorySchema.remove), CategoriesController.delete)
  ;
}