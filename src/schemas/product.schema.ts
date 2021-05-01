import joi, { ObjectSchema } from 'joi';

const baseSchema: Object = {
  name: joi.string().required(),
  price: joi.number().required(),
  dueDate: joi.date(),
  description: joi.string(),
}

const create: ObjectSchema = joi.object().keys({
  ...baseSchema,
  categoryOwner: joi.string().required()
});

const update: ObjectSchema = joi.object().keys({
  ...baseSchema,
  id: joi.string().required()
});

const getById: ObjectSchema = joi.object().keys({
  id: joi.string().required()
});

const remove: ObjectSchema = joi.object().keys({
  id: joi.string().required()
});

export default {
  create,
  update,
  getById,
  remove
}