import { celebrate, Joi, Segments } from 'celebrate';

class ContractValidation {
  create() {
    return celebrate({
      [Segments.BODY]: {
        registration: Joi.string().required(),
        admission: Joi.string().required(),
        city: Joi.string().required(),
        type: Joi.number().required(),
        situation: Joi.number().required(),
        contract: Joi.number().required(),
        employeeId: Joi.string().uuid().required(),
      },
    });
  }
}

export default new ContractValidation();
