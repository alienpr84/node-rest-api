import express, {Router} from 'express';
import categoryRouter from './category.route';
import userRouter from './user.route';
import productRouter from './product.route';
import crmContactsRouter from './crm-contacts.route';

const router: Router = express.Router();

categoryRouter(router);
userRouter(router);
productRouter(router);
crmContactsRouter(router);

export default router;

