import mongoose, { Schema } from 'mongoose';
import { IUser } from '../interfaces';

const schema: Schema = new Schema({
  firstName: {
    type: String,
    required: true,
    unique: true
  },
  lastName: {
    type: String,
    required: true
  },
  isActive: {
    type: Boolean,
    default: true
  },
  phone: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true 
  },
  password: {
    type: String,
    required: true
  },
});

schema.path('firstName').validate(function(value: string) {
  return /^[A-Z]+(\s)?([A-z])*$/gi.test(value);
}, 'The first name only can be compount by a word or two separate by an space');

schema.path('lastName').validate(function(value: string) {
  return /[A-Z]+/gi.test(value);
}, 'Only letters are allowed, without spaces.');

schema.path('phone').validate(function(value: string) {
  return /[0-9]+/g.test(value)
}, 'Only number are allowed.');

schema.path('email').validate(function(value: string) {
  return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(value);
}, 'This email does not have a valid format');

export default mongoose.model<IUser>('User', schema);