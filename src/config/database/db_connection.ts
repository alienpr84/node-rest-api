import mongoose, { Connection} from 'mongoose';
import config from '../config';
import { IDBConnection } from '../../interfaces';

export default function dbConnection(): IDBConnection {
  mongoose.connect(
    config.dbUriConnection,
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    }
  );

  const connection: Connection = mongoose.connection;

  return {
    open: async (): Promise<void> => {
      try {
        await connection.once('open', () => {
          console.log('Data base connected');
        });
      } catch(error: unknown) {
        console.error(error);
      }
    },
    close: async () => {
      try {
        await connection.close();
        console.log('Database closed');
      }
      catch(error: unknown) {
        console.error(error);
      }
    }
  }
}