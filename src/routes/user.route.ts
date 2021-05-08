import { Router } from 'express';
import { UsersController } from '../controller';
import { userSchema } from '../schemas';
import { joiMiddleware } from '../middlewares';

export default function userRouter(router: Router) {
  router
    .post('/users', joiMiddleware.validateData(userSchema.create), UsersController.create)
    .get('/users', UsersController.get)
    .get('/users/infinite-scroll', UsersController.infiniteScroll)
    .get('/users/:id', joiMiddleware.validateData(userSchema.getById), UsersController.getById)
    .put('/users/:id', joiMiddleware.validateData(userSchema.update), UsersController.update)
    .delete('/users/:id', joiMiddleware.validateData(userSchema.remove), UsersController.delete)
    .post('/users/create-many-with-faker/:quantity', joiMiddleware.validateData(userSchema.createManyWithFaker), UsersController.createManyWithFaker );
}


