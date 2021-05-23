import mongoose, { Schema } from "mongoose";
import { ICRMContacts } from "../interfaces";

const schema: Schema = new Schema({
  createdOn: { type: Date },
  assignedTo: { type: String },
  name: { type: String },
  email: { type: String },
  phone: { type: String },
  vehicle: { type: String },
  source: { type: String },
  totalLifeTimeValue: { type: Number },
  carsBought: { type: Number },
  financed: { type: Boolean },
  serviced: { type: Boolean },
});

export default mongoose.model<ICRMContacts>("CRMContacts", schema);
