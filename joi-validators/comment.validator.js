const Joi = require('@hapi/joi');

const createComment = Joi.object().keys({
  comment: Joi.string().required(),
  questionRef: Joi.string().required(),
  answerRef: Joi.string(),
  userRef: Joi.string().required(),
});

const updateComment = Joi.object().keys({
  comment: Joi.string().required(),
  questionRef: Joi.string().required(),
  answerRef: Joi.string(),
  userRef: Joi.string().required(),
});

module.exports = {
  createComment,
  updateComment,
};
