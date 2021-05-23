import { Document } from 'mongoose';

export default interface ICRMContacts extends Document {
	createdOn: Date;
	assignedTo: string;
	name: string;
	email: string;
	phone: string;
	vehicle: string;
	source: string;
	totalLifeTimeValue: number;
	carsBought: number;
	financed: boolean;
	serviced: boolean;
}