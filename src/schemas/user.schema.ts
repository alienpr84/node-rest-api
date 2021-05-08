import joi, { ObjectSchema} from 'joi';

const baseSchema: Object = {
  firstName: joi.string().required(),
  lastName: joi.string().required(),
  isActive: joi.boolean(),
  phone: joi.number().required(),
  email: joi.string().required(),
  password: joi.string().required()
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

const createManyWithFaker: ObjectSchema = joi.object().keys({
  quantity: joi.number().required()
})

export default {
  create,
  update,
  remove,
  getById,
  createManyWithFaker
}