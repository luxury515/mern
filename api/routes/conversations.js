const router = require("express").Router();
const Conversation = require("../models/Conversations");

router.post("/", async (req, res) => {
  const newConversation = new Conversation({
    members: [req.body.senderId, req.body.receiverId],
  });
  console.log("newConversation:", newConversation);
  try {
    const saveConversation = await newConversation.save(); //newConversation().save() 오타조심!!!!
    res.status(200).json(saveConversation);
  } catch (error) {
    console.log("error", error);
    res.status(500).json(error);
  }
});
module.exports = router;
