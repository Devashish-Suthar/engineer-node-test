const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { USER } = require('../constants/models.constant');

const userSchema = new Schema(
  {
    name: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model(USER, userSchema);
