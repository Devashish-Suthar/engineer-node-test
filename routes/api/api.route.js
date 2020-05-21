const express = require('express');
const router = express.Router();

router.use('/', require('./user.route'));
router.use('/', require('./question.route'));
router.use('/', require('./answer.route'));
// router.use('/', require('./comment.route'));

module.exports = router;
