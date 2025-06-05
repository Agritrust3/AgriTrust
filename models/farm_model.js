import mongoose from "mongoose";

const farmSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  farmer: {
    type: mongoose.Schema.Types.ObjectId, // This is the actual reference
    ref: 'User', // This tells Mongoose: "Look this ID up in the 'User' collection"
    required: true
  }
}, { timestamps: true });

const farm = mongoose.model("Farm", farmSchema);
export default farm;