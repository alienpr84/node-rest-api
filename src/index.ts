import { Express } from 'express';
import Server from './app';

async function Main(): Promise<void> {
  const app: Express = Server();
  await app.listen(5000);

  console.log('Server listen on port: 5000');
}

Main();