const mongoose = require('mongoose');

//🔸Implementing a simple schema and model for our applications and later will move it to different file.
const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A tour must have a name'],
    unique: true,
  },
  rating: {
    type: Number,
    default: 4.5,
  },
  price: {
    type: Number,
    required: [true, 'A tour must have a price'],
  },
});

//🔸Above we created a schema and now its time to create a model
const Tour = mongoose.model('Tour', tourSchema);

// This is the only thing we want to export so we use default exports
module.exports = Tour;
