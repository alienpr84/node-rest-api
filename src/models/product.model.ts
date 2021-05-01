import mogoose, { Schema } from 'mongoose';
import { IProduct } from '../interfaces';

// schema declaration
const schema: Schema = new Schema({
  name: {
    type: String,
    require: true,
    unique: true
  },
  price: {
    type: Number,
    require: true
  },
  dueDate: {
    type: Date,
  },
  description: {
    type: String
  },
  categoryOwner: {
    type: Schema.Types.ObjectId,
    ref: "Category"
  }
});

export default mogoose.model<IProduct>('Product', schema)