const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");
const { Schema } = mongoose;

const message = new Schema({
    content: {
        type: String,
        required: true,
        minLength: 1
    },
    senderId: {
        type: ObjectId,
        required: true
    },
    receiverId: {
        type: ObjectId,
        required: true
    },
    isDelivered: {
        type: Boolean,
        required: true,
        default:false
    },
    isSeen: {
        type: Boolean,
        required: true
    },
    timeOfDelivery: {
        type: Date,
    },
    timeOfSeen: {
        type: Date,
        default: null 
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const messageModel = mongoose.model('Message', message);
module.exports = messageModel;
