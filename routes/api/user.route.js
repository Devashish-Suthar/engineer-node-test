const express = require('express');
const router = express.Router();
const apiHelper = require('../../helpers/api.helper');
const ERROR_LITERALS = require('../../constants/error-literals.constant');
const GLOBAL = require('../../constants/global.constant');
const ROUTES = require('../../constants/routes.constant');
const User = require('../../models/user.model');

router.post(`${ROUTES.USER.CREATE_USER.URL}`, async (req, res, next) => {
  try {
    const { body } = req;
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
});

module.exports = router;
