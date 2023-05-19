
const {Schema, model} = require('mongoose');
const tripSchema = new Schema({
    user_id: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true,
        },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user'
        }
});

const Trip = model('trip', tripSchema);
module.exports = Trip;