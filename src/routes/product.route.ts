import { Router } from 'express';
import { ProductsController } from '../controller';
import { joiMiddleware } from '../middlewares';
import { productSchema } from '../schemas';

export default function categoryRouter(router: Router): void {
  router
    .post('/products', joiMiddleware.validateData(productSchema.create), ProductsController.create)
    .get('/products', ProductsController.get)
    .get('/products/:id',joiMiddleware.validateData(productSchema.getById), ProductsController.getById)
    .put('/products/:id',joiMiddleware.validateData(productSchema.update), ProductsController.update)
    .delete('/products/:id',joiMiddleware.validateData(productSchema.remove), ProductsController.delete)
  ;
}