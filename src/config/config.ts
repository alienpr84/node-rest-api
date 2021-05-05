import dontenv from 'dotenv';
import { IConfig } from '../interfaces';

dontenv.config();

const {
  NODE_ENV,
  api_version,
  port,
  mongodb_port,
  dev_mongodb_database,
  dev_mongodb_user,
  dev_mongodb_password,
  test_mongodb_database,
  test_mongodb_user,
  test_mongodb_password
} = process.env;

const dbUriConnection: string = NODE_ENV === 'test' 
  ? `mongodb://${test_mongodb_user}:${test_mongodb_password}@localhost:${mongodb_port}/${test_mongodb_database}`
  : `mongodb://${dev_mongodb_user}:${dev_mongodb_password}@database:${mongodb_port}/${dev_mongodb_database}`;

const config: IConfig = {
  apiVersion: api_version as string,
  dbUriConnection: dbUriConnection,
  port: port as string,
}

export default config;