const GLOBAL = require('../constants/global.constant');
const ERROR_LITERALS = require('../constants/error-literals.constant');
const success = (res, data = {}, message = '') => {
  return res.status(GLOBAL.STATUS_CODE.SUCCESS).json({
    success: true,
    message,
    data,
  });
};
const failure = (
  res,
  errors = [],
  message = ERROR_LITERALS.COMMON_MESSAGES.FAILURE_OPRATION,
  statusCode = GLOBAL.STATUS_CODE.INTERNAL_SERVER
) => {
  return res.status(statusCode).json({
    success: true,
    message,
    errors,
  });
};
module.exports = {
  success,
  failure,
};
