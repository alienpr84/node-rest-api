import express, {Router} from 'express';
import categoryRouter from './category.route';
import userRouter from './user.route';
import productRouter from './product.route'

const router: Router = express.Router();

categoryRouter(router);
userRouter(router);
productRouter(router);

export default router;

