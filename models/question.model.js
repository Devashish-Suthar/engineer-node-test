const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { QUESTION, USER } = require('../constants/models.constant');

const questionSchema = new Schema(
  {
    question: { type: String, required: true },
    userRef: {
      type: Schema.Types.ObjectId,
      ref: USER,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model(QUESTION, questionSchema);
