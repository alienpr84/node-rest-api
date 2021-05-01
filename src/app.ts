import express, { Express, Request, Response } from 'express';
import router from './routes';

export default function server(): Express {
  const app: Express = express();

  // middleware
  app.use(express.json());

  // router
  app.use('/api', router);

  app.get('/test', (req: Request, resp: Response) => {
    resp.json('hello world');
  });

  return app;
}