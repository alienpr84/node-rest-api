import dontenv from 'dotenv';
import { IConfig } from '../interfaces';

dontenv.config();

const config: IConfig = {
  apiVersion: process.env.api_version as string,
  dbUriConnection: `mongodb://${process.env.mongodb_user}:${process.env.mongodb_password}@database:27017/${process.env.mongodb_database}` as string,
  port: process.env.port as string
}

export default config;