const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { COMMENT, QUESTION, USER } = require('../constants/models.constant');

const commentSchema = new Schema(
  {
    comment: { type: String, required: true },
    question: { type: Schema.Types.ObjectId, ref: QUESTION },
    userRef: {
      type: Schema.Types.ObjectId,
      ref: USER,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model(COMMENT, commentSchema);
