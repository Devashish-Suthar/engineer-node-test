const express = require('express');
const router = express.Router();
const apiHelper = require('../../helpers/api.helper');
const ERROR_LITERALS = require('../../constants/error-literals.constant');
const GLOBAL = require('../../constants/global.constant');
const ROUTES = require('../../constants/routes.constant');
const Comment = require('../../models/comment.model');
const joiMiddleware = require('../../middlewares/joi.middleware');
const {
  createComment,
  updateComment,
} = require('../../joi-validators/comment.validator');

router.post(
  `${ROUTES.COMMENT.CREATE_COMMENT.URL}`,
  joiMiddleware(createComment),
  async (req, res, next) => {
    try {
      const { body } = req;
      const commentInstance = new Comment({
        ...body,
      });
      const comment = await commentInstance.save();
      if (comment && Object.keys(comment).length) {
        return apiHelper.success(
          res,
          { comment },
          ERROR_LITERALS.COMMENT.CREATE_COMMENT.SUCCESS
        );
      }
      return apiHelper.failure(
        res,
        [],
        ERROR_LITERALS.COMMENT.CREATE_COMMENT.FAILURE,
        GLOBAL.STATUS_CODE.BAD_REQUEST
      );
    } catch (error) {
      return apiHelper.failure(res, [error], ERROR_LITERALS.CATCH.ERROR);
    }
  }
);

router.put(
  `${ROUTES.COMMENT.UPDATE_COMMENT.URL}`,
  joiMiddleware(updateComment),
  async (req, res, next) => {
    try {
      const { body } = req;
      const { commentId } = req.params;
      const comment = await Comment.findByIdAndUpdate(
        commentId,
        { ...body },
        { new: true }
      );
      if (comment && Object.keys(comment).length) {
        return apiHelper.success(
          res,
          { comment },
          ERROR_LITERALS.COMMENT.UPDATE_COMMENT.SUCCESS
        );
      }
      return apiHelper.failure(
        res,
        [],
        ERROR_LITERALS.COMMENT.UPDATE_COMMENT.FAILURE,
        GLOBAL.STATUS_CODE.BAD_REQUEST
      );
    } catch (error) {
      return apiHelper.failure(res, [error], ERROR_LITERALS.CATCH.ERROR);
    }
  }
);

router.delete(
  `${ROUTES.COMMENT.DELETE_COMMENT.URL}`,
  async (req, res, next) => {
    try {
      const { commentId } = req.params;
      const comment = await Comment.findByIdAndDelete(commentId);
      if (comment && Object.keys(comment).length) {
        return apiHelper.success(
          res,
          { comment },
          ERROR_LITERALS.COMMENT.DELETE_COMMENT.SUCCESS
        );
      }
      return apiHelper.failure(
        res,
        [],
        ERROR_LITERALS.COMMENT.DELETE_COMMENT.FAILURE,
        GLOBAL.STATUS_CODE.BAD_REQUEST
      );
    } catch (error) {
      return apiHelper.failure(res, [error], ERROR_LITERALS.CATCH.ERROR);
    }
  }
);

router.get(
  `${ROUTES.COMMENT.GET_COMMENTS_BY_QUESTION.URL}`,
  async (req, res, next) => {
    try {
      const { questionId: questionRef } = req.params;
      const comments = await Comment.find({ questionRef })
        .populate('questionRef')
        .populate('answerRef')
        .populate('userRef');
      if (comments && comments.length) {
        return apiHelper.success(
          res,
          { comments },
          ERROR_LITERALS.COMMENT.GET_COMMENT_BY_QUESTION.SUCCESS
        );
      }
      return apiHelper.success(
        res,
        { comments: [] },
        ERROR_LITERALS.COMMON_MESSAGES.NO_DATA_FOUND
      );
    } catch (error) {
      return apiHelper.failure(res, [error], ERROR_LITERALS.CATCH.ERROR);
    }
  }
);
module.exports = router;
