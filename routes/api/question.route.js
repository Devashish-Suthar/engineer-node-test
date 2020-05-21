const express = require('express');
const router = express.Router();
const apiHelper = require('../../helpers/api.helper');
const ERROR_LITERALS = require('../../constants/error-literals.constant');
const GLOBAL = require('../../constants/global.constant');
const ROUTES = require('../../constants/routes.constant');
const User = require('../../models/user.model');
const Question = require('../../models/question.model');
const joiMiddleware = require('../../middlewares/joi.middleware');
const {
  createQuestion,
  updateQuestion,
} = require('../../joi-validators/question.validator');

router.post(
  `${ROUTES.QUESTION.CREATE_QUESTION.URL}`,
  joiMiddleware(createQuestion),
  async (req, res, next) => {
    try {
      const { body } = req;
      const questionInstance = new Question({
        ...body,
      });
      const question = await questionInstance.save();
      if (question && Object.keys(question).length) {
        return apiHelper.success(
          res,
          { question },
          ERROR_LITERALS.QUESTION.CREATE_QUESTION.SUCCESS
        );
      }
      return apiHelper.failure(
        res,
        [],
        ERROR_LITERALS.QUESTION.CREATE_QUESTION.FAILURE,
        GLOBAL.STATUS_CODE.BAD_REQUEST
      );
    } catch (error) {
      return apiHelper.failure(res, [error], ERROR_LITERALS.CATCH.ERROR);
    }
  }
);

router.put(
  `${ROUTES.QUESTION.UPDATE_QUESTION.URL}`,
  joiMiddleware(updateQuestion),
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
