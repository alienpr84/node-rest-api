import { Request, Response } from "express";
import { ICRMContactsController, ICRMContacts } from "../interfaces";
import CRMContactsModel from "../models/crm-contacts.model";
import faker from "faker";

const controller: ICRMContactsController = {} as ICRMContactsController;

controller.create = async (req: Request, res: Response): Promise<void> => {
  const model: ICRMContacts = new CRMContactsModel(req.body);
  try {
    await model.save();
    res.status(201).json("User created successfully.");
  } catch (error) {
    res.status(400).json(error.message);
  }
};

controller.get = async (req: Request, res: Response): Promise<void> => {
  try {
    const models: ICRMContacts[] = await CRMContactsModel.find();
    res.status(200).json(models);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

controller.getById = async (req: Request, res: Response): Promise<void> => {
  try {
    const model: ICRMContacts =
      (await CRMContactsModel.findById(req.params.id)) || ({} as ICRMContacts);
    res.status(200).json(model);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

controller.update = async (req: Request, res: Response): Promise<void> => {
  try {
    await CRMContactsModel.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json("User updated successfully.");
  } catch (error) {
    res.status(400).json(error.message);
  }
};

controller.delete = async (req: Request, res: Response): Promise<void> => {
  try {
    await CRMContactsModel.findByIdAndDelete(req.params.id);
    res.status(200).json("User deleted successfully.");
  } catch (error) {
    res.status(400).json(error.message);
  }
};

controller.createManyWithFaker = async (
  req: Request,
  res: Response
): Promise<void> => {
  const crmContacts: Object[] = [];
  const quantity: number = +req.params.quantity;

  for (let i = 0; i < quantity; i++) {
    crmContacts.push({
      createdOn: faker.date.between("##/##/2020", "##/##/2021"),
      assignedTo: faker.random.arrayElement(['Willian Pena', 'Ken Gorin', 'Lorena Mingo', 'Josh Beckner', 'Austin West']),
      name: faker.name.firstName() + ' ' + faker.name.lastName(),
      email: faker.internet.email(),
      phone: `(484) ${faker.phone.phoneNumber('###-###')}`,
      vehicle: faker.vehicle.vehicle(),
      source: faker.random.arrayElement(['Website', 'GarGurus', 'TrueCar', 'CARFAX']),
      totalLifeTimeValue: faker.datatype.number(100),
      carsBought: faker.datatype.number(10),
      financed: faker.datatype.boolean(),
      serviced: faker.datatype.boolean(),
    });
  }

  try {
    const model: ICRMContacts = new CRMContactsModel();
    await model.collection.insertMany(crmContacts);
    res.status(201).json("Collection of users created successfully.");
  } catch (error: unknown) {
    res.status(400).json(error);
  }
};

export default controller;
