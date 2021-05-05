import express, { Express } from 'express';
import router from './routes';

export default function server(): Express {
  const app: Express = express();

  // middleware
  app.use(express.json());

  // router
  app.use('/api', router);

  return app;
}