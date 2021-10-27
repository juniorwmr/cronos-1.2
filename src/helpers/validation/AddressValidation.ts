import { celebrate, Joi, Segments } from 'celebrate';

class AddressValidation {
  create() {
    return celebrate({
      [Segments.BODY]: {
        zipCode: Joi.string().required(),
        street: Joi.string().required(),
        neighborhood: Joi.string(),
        number: Joi.string().required(),
        city: Joi.string().required(),
        state: Joi.string().required(),
        complement: Joi.string(),
        reference: Joi.string(),
        condominium: Joi.string(),
        latitude: Joi.string(),
        longitude: Joi.string(),
        active: Joi.string(),
      },
    });
  }
}

export default new AddressValidation();
