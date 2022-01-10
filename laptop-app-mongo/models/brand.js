const { Schema, model, Types } = require("mongoose");

const schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Brand = model("brand", schema);

module.exports = Brand;
