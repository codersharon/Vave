// models/Post.js
import mongoose from "mongoose";

const MemberSchema = new mongoose.Schema({
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
    type: Array,
    required: true,
  },
  joinedAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Member || mongoose.model("Member", MemberSchema);
