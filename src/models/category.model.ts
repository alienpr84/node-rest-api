import mongoose, { Schema } from 'mongoose';
import { ICategory } from '../interfaces';

// schema declaration
const schema: Schema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: "Product"
    }
  ]
});

// validations
schema.path('name').validate(function(value: string) {
  return /^^[A-Z]+(\s)?[A-Z]*(\s)?[A-Z]*$/gi.test(value);
}, 'The value enter isn\'t valid. Only letters and spaces are allowed.');

export default mongoose.model<ICategory>('Category', schema);