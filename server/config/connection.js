const mongoose = require ('mongoose');

// const PORT = process.env.PORT;

mongoose.connect(process.env.MONGODB_URI ||'mongodb://127.0.0.1:27017/travelgo',
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
  );

module.exports =mongoose.connection;