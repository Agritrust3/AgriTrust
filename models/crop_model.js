import mongoose from "mongoose";

const cropSchema = new mongoose.Schema({
  name: { type: String, required: true },
  fertilizer: { type: String },
  pesticide: { type: String },
  seedType: { type: String },
  farmer: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User',
    required: true
  },
  farm: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Farm',
    required: true
  }
}, { timestamps: true });

const crop = mongoose.model("crop", cropSchema);
export default crop;