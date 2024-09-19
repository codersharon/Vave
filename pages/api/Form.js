// models/Post.js
import mongoose from "mongoose";
import { unique } from "next/dist/build/utils";

const FormSchema = new mongoose.Schema({
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
    required: true,
  },
  appliedAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Form || mongoose.model("Form", FormSchema);
