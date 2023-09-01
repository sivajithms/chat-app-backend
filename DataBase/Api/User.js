const express = require('express');
const router = express.Router();
const userModel = require('../Model/User.model');

router.get('/getAll', async (req, res) => {
  try {
    const users = await userModel.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
