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
          ERROR_LITERALS.ANSWER.CREATE_ANSWER.SUCCESS
        );
      }
      return apiHelper.failure(
        res,
        [],
        ERROR_LITERALS.ANSWER.CREATE_ANSWER.FAILURE,
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
      const { questionId } = req.params;
      const question = await Question.findByIdAndUpdate(
        questionId,
        { ...body },
        { new: true }
      );
      if (question && Object.keys(question).length) {
        return apiHelper.success(
          res,
          { question },
          ERROR_LITERALS.QUESTION.UPDATE_QUESTION.SUCCESS
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

router.delete(
  `${ROUTES.QUESTION.DELETE_QUESTION.URL}`,
  async (req, res, next) => {
    try {
      const { questionId } = req.params;
      const question = await Question.findByIdAndDelete(questionId);
      console.log('question deleted:', question);
      if (question && Object.keys(question).length) {
        return apiHelper.success(
          res,
          { question },
          ERROR_LITERALS.QUESTION.DELETE_QUESTION.SUCCESS
        );
      }
      return apiHelper.failure(
        res,
        [],
        ERROR_LITERALS.QUESTION.DELETE_QUESTION.FAILURE,
        GLOBAL.STATUS_CODE.BAD_REQUEST
      );
    } catch (error) {
      return apiHelper.failure(res, [error], ERROR_LITERALS.CATCH.ERROR);
    }
  }
);

module.exports = router;
