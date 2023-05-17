const mongoose = require ('mongoose');

const PORT = process.env.PORT;

mongoose.connect(PORT ? process.env.DB_URL:'mongodb://127.0.0.1:27017/travelgo');

module.exports =mongoose.connection;