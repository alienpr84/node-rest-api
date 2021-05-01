import { Document, Schema } from 'mongoose';

export default interface IProduct extends Document {
  name: string;
  price: number;
  dueDate: Date;
  description: string;
  categoryOwner: any;
}