const mongoose = require('mongoose');

module.exports = async () => {
    return mongoose.connect('mongodb+srv://sivajithm:BZRmXFnligbXhDIw@cluster0.zaoneg1.mongodb.net/whatsapp', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
};