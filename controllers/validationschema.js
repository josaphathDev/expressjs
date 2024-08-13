const Joi = require('joi');

const userSchema = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
});
const { error } = userSchema.validate(req.body);
if (error) return res.status(400).send(error.details[0].message);

// Procéder à la création de l'utilisateur si les données sont valides
