// pages/api/posts/index.js
import dbConnect from "./mongodb";
import Post from "./Posts";

export default async function handler(req, res) {
  const { method } = req;
  const { id } = req.query;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const post = await Post.findById(id);
        await res.status(200).json(post);
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;
    case "DELETE":
      try {
        //Find the note to be delete and delete it
        let post = await Post.findById(id);
        if (!post) {
          return res.status(404).send("Not Found");
        }
        post = await Post.findByIdAndDelete(id);
        res.json({ success: true });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;
      break;
    case "PUT":
      try {
        //Find the note to be delete and delete it
        let post = await Post.findById(id);
        if (!post) {
          return res.status(404).send("Not Found");
        }
        post = await Post.findByIdAndUpdate(id, req.body);
        res.json({ success: true });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
