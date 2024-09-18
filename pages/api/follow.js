// pages/api/posts/index.js
import dbConnect from "./mongodb";
import Follower from "./Followers";

export default async function handler(req, res) {
  const { method } = req;
  const { id } = req.query;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const follower = await Follower.find();
        await res.status(200).json(Follower);
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;
    case "POST":
      try {
        const follower = await Follower.create(req.body);
        res.json({success: true, Follower});
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;
    case "DELETE":
      try {
        //Find the note to be delete and delete it
        let follower = await Follower.findById(id);
        if (!Follower) {
          return res.status(404).send("Not Found");
        }
        follower = await Follower.findByIdAndDelete(id);
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
