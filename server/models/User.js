const { model, Schema } = require('mongoose');

// schema build to store user data in mongoDB database
const userSchema = new Schema({
    username: {type: String, default: null},
    email: {type: String, unique: true},
    passwork: {type: String},
    tokem : {type:String}
});

module.exports = model('User', userSchema);