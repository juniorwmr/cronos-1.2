import { celebrate, Joi, Segments } from 'celebrate';

class EmployeeValidation {
  create() {
    return celebrate({
      [Segments.BODY]: {
        name: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().required(),
        type: Joi.number().min(1).max(2),
      },
    });
  }
}

export default new EmployeeValidation();
