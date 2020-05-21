const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const {
  COMMENT,
  QUESTION,
  USER,
  ANSWER,
} = require('../constants/models.constant');

const commentSchema = new Schema(
  {
    comment: { type: String, required: true },
    questionRef: { type: Schema.Types.ObjectId, ref: QUESTION },
    answerRef: {
      type: Schema.Types.ObjectId,
      ref: ANSWER,
    },
    userRef: {
      type: Schema.Types.ObjectId,
      ref: USER,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model(COMMENT, commentSchema);
