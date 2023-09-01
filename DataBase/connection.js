const mongoose = require('mongoose');

module.exports = async () => {
    return mongoose.connect('mongodb+srv://sivajith3plusgames:nUHeqdMZ16ifctJK@cluster0.y77rocz.mongodb.net/whatsapp', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
};
