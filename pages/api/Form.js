// models/Post.js
import mongoose from "mongoose";

const FormSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
  },
  DOB: {
    type: String,
    required: false,
  },
  appliedAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Form || mongoose.model("Form", FormSchema);
