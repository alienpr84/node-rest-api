import { Document, Schema } from 'mongoose';

export default interface ICategoryDocument extends Document {
  name: string;
  products: [{type: Schema.Types.ObjectId, ref: string}];
}