import { Express } from 'express';
import server from './app';
import { config, dbConnection } from './config';

async function main() {
  const connection = dbConnection();
  connection.open();
  const app: Express = server();
  await app.listen(config.port);
  console.log('Server listen on port: ' + config.port);
}

main();