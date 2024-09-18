// models/Post.js
import mongoose from "mongoose";

const FollowerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  DOB: {
    type: String,
    required: false,
  },
  startedAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Form || mongoose.model("Follower", FollowerSchema);
