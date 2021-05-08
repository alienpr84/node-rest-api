import express, { Express } from 'express';
import router from './routes';
import cors from 'cors';

export default function server(): Express {
  const app: Express = express();

  // middleware
  app.use(cors());
  app.use(express.json());

  // router
  app.use('/api', router);

  return app;
}