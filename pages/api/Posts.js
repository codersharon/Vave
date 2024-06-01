// models/Post.js
import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please provide a title for this post."],
    maxlength: [60, "Title cannot be more than 60 characters"],
  },
  content: {
    type: String,
    required: [true, "Please provide content for this post."],
  },
  links: {
    type: Array,
    required: false,
  },
  Category: {
    type: String,
    required: [
      true,
      "Please provide any of these [Tech, Business, Science, Entertainment] categories for these post",
    ],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Post || mongoose.model("Post", PostSchema);
