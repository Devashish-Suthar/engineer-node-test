const Joi = require('@hapi/joi');

const createAnswer = Joi.object().keys({
  answer: Joi.string().required(),
  questionRef: Joi.string().required(),
  userRef: Joi.string().required(),
});

const updateAnswer = Joi.object.keys({
  answer: Joi.string().required(),
  questionRef: Joi.string().required(),
  userRef: Joi.string().required(),
});

module.exports = {
  createAnswer,
  updateAnswer,
};
