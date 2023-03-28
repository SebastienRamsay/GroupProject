import mongoose from 'mongoose';


const tireSchema = new mongoose.Schema({
  brand: {
    type: String,
    required: true
  },
  treadType: {
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

const Tire = mongoose.model('Tire', tireSchema)
export default Tire
