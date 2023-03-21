const mongoose = require('mongoose');

const tireSchema = new mongoose.Schema({
  brand: {
    type: String,
    required: true
  },
  model: {
    type: String,
    required: true
  },
  size: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  isAvailable: {
    type: Boolean,
    default: true
  }
}, { timestamps: true });

module.exports = mongoose.model('Tire', tireSchema);
