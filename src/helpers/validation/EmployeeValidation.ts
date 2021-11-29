import { celebrate, Joi, Segments } from 'celebrate';

class EmployeeValidation {
  create() {
    return celebrate({
      [Segments.BODY]: {
        id: Joi.string().uuid().allow(''),
        name: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().required(),
        cpf: Joi.string().required(),
        education: Joi.string().required(),
        pisPasep: Joi.string().required(),
        birthDate: Joi.date().required(),
        genre: Joi.number().required(),
        phone: Joi.string().required(),
      },
    });
  }
}

export default new EmployeeValidation();
