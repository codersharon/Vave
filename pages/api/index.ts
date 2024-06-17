// pages/api/posts/index.js
import dbConnect from "./mongodb";
import Post from "./Posts";

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        if (req.query.category1 == null) {
          const posts = await Post.find({
            Category: { $nin: ["dailyhighlight", "dailytopic"] },
          }).sort({ createdAt: -1 });
          res.status(200).json(posts);
        } else if (req.query.category1!) {
          const posts = await Post.find({ Category: req.query.category1 }).sort(
            { createdAt: -1 }
          );
          res.status(200).json(posts);
        } else if (req.query.category2!) {
          const posts = await Post.find({
            Category: [req.query.category1, req.query.category2],
          }).sort({ createdAt: -1 });
          res.status(200).json(posts);
        }
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;
    case "POST":
      try {
        const post = await Post.create(req.body);
        res.status(201).json(post);
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
