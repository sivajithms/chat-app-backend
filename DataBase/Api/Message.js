const express = require("express");
const router = express.Router();
const MessageModel = require("../Model/Message.model");

// Route for sending a message
router.post("/send", async (req, res) => {
  try {
    // Extract data from the request body
    const {
      content,
      senderId,
      receiverId,
      isDelivered,
      isSeen,
      timeOfDelivery,
      timeOfSeen,
    } = req.body;

    // Create a new message instance
    const newMessage = new MessageModel({
      content,
      senderId,
      receiverId,
      isDelivered,
      isSeen,
      timeOfDelivery,
      timeOfSeen,
    });

    // Save the message to the database
    const savedMessage = await newMessage.save();

    res.status(201).json(savedMessage); // Return the saved message
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/getMessages", async (req, res) => {
  try {
    const { senderId, receiverId } = req.query;
    console.log(senderId,receiverId);

    const messages = await MessageModel.find({
      $or: [
        { senderId, receiverId },
        { senderId: receiverId, receiverId: senderId },
      ],
    });

    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
