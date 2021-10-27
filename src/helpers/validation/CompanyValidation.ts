import { celebrate, Joi, Segments } from 'celebrate';

class CompanyValidation {
  create() {
    return celebrate({
      [Segments.BODY]: {
        name: Joi.string().required(),
        cnpj: Joi.string().required(),
        email: Joi.string().required(),
        phone: Joi.string().required(),
        whatsapp: Joi.string(),
        businessHours: Joi.string().required(),
        zipCode: Joi.string().required(),
        street: Joi.string().required(),
        neighborhood: Joi.string(),
        number: Joi.string().required(),
        city: Joi.string().required(),
        state: Joi.string().required(),
        latitude: Joi.string(),
        longitude: Joi.string(),
        complement: Joi.string(),
        active: Joi.boolean(),
        parentCompany: Joi.boolean(),
      },
    });
  }

  changeParentCompany() {
    return celebrate({
      [Segments.BODY]: {
        companyId: Joi.string(),
      },
    });
  }
}

export default new CompanyValidation();
