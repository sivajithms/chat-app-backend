const express = require('express');
const router = express.Router();
const UserModel = require('../Model/User.model');

const Router = express.Router();

Router.post('/signup', async (req, res) => {
    try {
        await UserModel.findPhone(req.body.credentials);

        console.log('newuser');
        const newUser = await UserModel.create(req.body.credentials);

        return res.status(200).json({ newUser });

    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
})

Router.post('/signin', async (req, res) => {
    try {
        const user = await UserModel.findByPhoneAndPassword(req.body.credentials)

        return res.status(200).json({ user });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
})

module.exports = Router;
 