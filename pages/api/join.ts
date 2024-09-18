// pages/api/posts/index.js
import dbConnect from "./mongodb";
import Form from "./Form";

export default async function handler(req, res) {
  const { method } = req;
  const { id } = req.query;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const form = await Form.find();
        await res.status(200).json(form);
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;
    case "POST":
      try {
        const form = await Form.create(req.body);
        res.json({success: true, form});
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;
    case "DELETE":
      try {
        //Find the note to be delete and delete it
        let form = await Form.findById(id);
        if (!form) {
          return res.status(404).send("Not Found");
        }
        form = await Form.findByIdAndDelete(id);
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
