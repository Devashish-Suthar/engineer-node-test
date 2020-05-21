const express = require('express');
const router = express.Router();
const apiHelper = require('../../helpers/api.helper');
const ERROR_LITERALS = require('../../constants/error-literals.constant');
const GLOBAL = require('../../constants/global.constant');

router.post('/', async (req, res, next) => {
  try {
  } catch (error) {
    return apiHelper.failure(res, [error], ERROR_LITERALS.CATCH.ERROR);
  }
});

module.exports = router;
