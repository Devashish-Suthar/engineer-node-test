const Joi = require('@hapi/joi');

const createQuestion = Joi.object().keys({
  question: Joi.string().required(),
  userRef: Joi.string().required(),
});

const updateQuestion = Joi.object.keys({
  question: Joi.string().required(),
  userRef: Joi.string().required(),
});
module.exports = {
  createQuestion,
  updateQuestion,
};
