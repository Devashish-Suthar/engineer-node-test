const express = require('express');
const router = express.Router();
const apiHelper = require('../../helpers/api.helper');
const ERROR_LITERALS = require('../../constants/error-literals.constant');
const GLOBAL = require('../../constants/global.constant');
const ROUTES = require('../../constants/routes.constant');
const Answer = require('../../models/answer.model');
const joiMiddleware = require('../../middlewares/joi.middleware');
const {
  createAnswer,
  updateAnswer,
} = require('../../joi-validators/answer.validator');

router.post(
  `${ROUTES.ANSWER.CREATE_ANSWER_BY_QUESTION.URL}`,
  joiMiddleware(createAnswer),
  async (req, res, next) => {
    try {
      const { body } = req;
      const answerInstance = new Answer({
        ...body,
      });
      const answer = await answerInstance.save();
      if (answer && Object.keys(answer).length) {
        return apiHelper.success(
          res,
          { answer },
          ERROR_LITERALS.ANSWER.CREATE_ANSWER_BY_QUESTION.SUCCESS
        );
      }
      return apiHelper.failure(
        res,
        [],
        ERROR_LITERALS.ANSWER.CREATE_ANSWER_BY_QUESTION.FAILURE,
        GLOBAL.STATUS_CODE.BAD_REQUEST
      );
    } catch (error) {
      return apiHelper.failure(res, [error], ERROR_LITERALS.CATCH.ERROR);
    }
  }
);

router.put(
  `${ROUTES.ANSWER.UPDATE_ANSWER_BY_QUESTION.URL}`,
  joiMiddleware(updateAnswer),
  async (req, res, next) => {
    try {
      const { body } = req;
      const { answerId } = req.params;
      const answer = await Answer.findByIdAndUpdate(
        answerId,
        { ...body },
        { new: true }
      );
      if (answer && Object.keys(answer).length) {
        return apiHelper.success(
          res,
          { answer },
          ERROR_LITERALS.ANSWER.UPDATE_ANSWER_BY_QUESTION.SUCCESS
        );
      }
      return apiHelper.failure(
        res,
        [],
        ERROR_LITERALS.QUESTION.UPDATE_QUESTION.FAILURE,
        GLOBAL.STATUS_CODE.BAD_REQUEST
      );
    } catch (error) {
      return apiHelper.failure(res, [error], ERROR_LITERALS.CATCH.ERROR);
    }
  }
);

router.delete(`${ROUTES.ANSWER.DELETE_ANSWER.URL}`, async (req, res, next) => {
  try {
    const { answerId } = req.params;
    const answer = await Answer.findByIdAndDelete(answerId);
    if (answer && Object.keys(answer).length) {
      return apiHelper.success(
        res,
        { answer },
        ERROR_LITERALS.ANSWER.DELETE_ANSWER.SUCCESS
      );
    }
    return apiHelper.failure(
      res,
      [],
      ERROR_LITERALS.ANSWER.DELETE_ANSWER.FAILURE,
      GLOBAL.STATUS_CODE.BAD_REQUEST
    );
  } catch (error) {
    return apiHelper.failure(res, [error], ERROR_LITERALS.CATCH.ERROR);
  }
});

router.get(
  `${ROUTES.ANSWER.GET_ANSWERS_BY_QUESTION.URL}`,
  async (req, res, next) => {
    try {
      const { questionId: questionRef } = req.params;
      const answers = await Answer.find({ questionRef })
        .populate('questionRef')
        .populate('userRef');
      if (answers && answers.length) {
        return apiHelper.success(
          res,
          { answers },
          ERROR_LITERALS.ANSWER.GET_ANSWERS_BY_QUESTIONS.SUCCESS
        );
      }
      return apiHelper.success(
        res,
        { answers: [] },
        ERROR_LITERALS.COMMON_MESSAGES.NO_DATA_FOUND
      );
    } catch (error) {
      return apiHelper.failure(res, [error], ERROR_LITERALS.CATCH.ERROR);
    }
  }
);

module.exports = router;
