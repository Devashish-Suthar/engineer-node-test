const express = require('express');
const router = express.Router();
const apiHelper = require('../../helpers/api.helper');
const ERROR_LITERALS = require('../../constants/error-literals.constant');
const GLOBAL = require('../../constants/global.constant');
const ROUTES = require('../../constants/routes.constant');
const User = require('../../models/user.model');
const joiMiddleware = require('../../middlewares/joi.middleware');
const { createUser } = require('../../joi-validators/user.validator');

router.post(
  `${ROUTES.USER.CREATE_USER.URL}`,
  joiMiddleware(createUser),
  async (req, res, next) => {
    try {
      const { body } = req;
      const { email } = body;
      if (email) {
        const isEmailExists = await User.findOne({ email });
        if (isEmailExists && Object.keys(isEmailExists).length) {
          return apiHelper.failure(
            res,
            [],
            ERROR_LITERALS.USER.CREATE_USER.ALREADY_EXISTS,
            GLOBAL.STATUS_CODE.BAD_REQUEST
          );
        }
      }
      const userInstance = new User({
        ...body,
      });
      const user = await userInstance.save();
      if (user && Object.keys(user).length) {
        return apiHelper.success(
          res,
          { user },
          ERROR_LITERALS.USER.CREATE_USER.SUCCESS
        );
      }
      return apiHelper.failure(
        res,
        [],
        ERROR_LITERALS.USER.CREATE_USER.FAILURE,
        GLOBAL.STATUS_CODE.BAD_REQUEST
      );
    } catch (error) {
      return apiHelper.failure(res, [error], ERROR_LITERALS.CATCH.ERROR);
    }
  }
);

router.get(`${ROUTES.USER.GET_ALL_USERS.URL}`, async (req, res, next) => {
  try {
    const users = await User.find({});
    if (users && users.length) {
      return apiHelper.success(
        res,
        { users },
        ERROR_LITERALS.USER.GET_ALL_USERS.SUCCESS
      );
    }
    return apiHelper.failure(
      res,
      [],
      ERROR_LITERALS.COMMON_MESSAGES.NO_DATA_FOUND,
      GLOBAL.STATUS_CODE.BAD_REQUEST
    );
  } catch (error) {
    return apiHelper.failure(res, [error], ERROR_LITERALS.CATCH.ERROR);
  }
});

module.exports = router;
