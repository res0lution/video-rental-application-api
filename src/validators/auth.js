const Joi = require('joi');

module.exports = req => {
    const schema = Joi.object({
        email: Joi
            .string()
            .min(5)
            .max(255)
            .required()
            .email(),
        password: Joi.string().min(5).max(255).required(),
    });

    return schema.validate(req);
};
