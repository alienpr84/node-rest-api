import joi, { ObjectSchema } from 'joi';

const baseSchema: Object = {
  name: joi.string().required()
}

const create: ObjectSchema = joi.object().keys({
  ...baseSchema
});

const update: ObjectSchema = joi.object().keys({
  ...baseSchema,
  id: joi.string().required()
});

const remove: ObjectSchema = joi.object().keys({
  id: joi.string().required()
});

const getById: ObjectSchema = joi.object().keys({
  id: joi.string().required()
});

export default {
  create,
  update,
  remove,
  getById
}