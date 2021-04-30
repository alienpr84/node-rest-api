import mongoose, { Connection} from 'mongoose';
import config from '../config';

export default async function dbConnection(): Promise<void> {
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

  try {
    await connection.once('open', () => {
      console.log('Data base connected');
    });

  } catch(error: unknown) {
    console.error(error);
  }
}