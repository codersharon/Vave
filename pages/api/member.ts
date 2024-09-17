// pages/api/posts/index.js
import dbConnect from "./mongodb";
import Member from "./Members";

export default async function handler(req, res) {
  const { method } = req;
  const { id } = req.query;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const member = await Member.findById(id);
        await res.status(200).json(member);
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;
    case "DELETE":
      try {
        //Find the note to be delete and delete it
        let member = await Member.findById(id);
        if (!member) {
          return res.status(404).send("Not Found");
        }
        member = await Member.findByIdAndDelete(id);
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
