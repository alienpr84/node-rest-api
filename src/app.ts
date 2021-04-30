import express, { Express } from 'express';

export default function Server(): Express {
  const app: Express = express();

  // for testing only
  app.get('/', (req, resp) => {
    resp.json('hello world');
  });

  return app;
}