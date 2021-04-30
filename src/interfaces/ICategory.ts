import { Document } from 'mongoose';

export default interface ICategoryDocument extends Document {
  name: string;
}