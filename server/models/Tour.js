const {Schema, model} = require ('mongoose')

const tourSchema = new Schema({

    title: {
    type: String,
    required: true,
    unique: true,
    },
    city: {
        type: String,
        required: true,
     },
  
    details: {
    type: String,
    required: true,
    },
    
    reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review",
    },
  ]
},
{ timestamps: true }
);

const Tour = model('tour', tourSchema);

module.exports = Tour;