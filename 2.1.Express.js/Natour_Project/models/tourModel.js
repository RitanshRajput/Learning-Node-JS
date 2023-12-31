const mongoose = require('mongoose');

//🔸Implementing a simple schema and model for our applications and later will move it to different file.
const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A tour must have a name'],
    unique: true,
    trim: true, // trim only works on string, so this is a schema type for string that will remove all the whitespaces in the beginning and the end
  },
  duration: {
    type: Number,
    required: [true, 'A tour must have a duration'],
  },
  maxGroupSize: {
    type: Number,
    required: [true, 'A tour must have a group size'],
  },
  difficulty: {
    type: String,
    required: [true, 'A tour must have a difficulty'],
  },
  ratingsAverage: {
    type: Number,
    default: 4.5,
  },
  ratingsQuantity: {
    type: Number,
    default: 0,
  },
  price: {
    type: Number,
    required: [true, 'A tour must have a price'],
  },
  priceDiscount: Number,
  summary: {
    type: String,
    trim: true,
    required: [true, 'A tour must have a summary'],
  },
  description: {
    type: String,
    trim: true,
  },
  imageCover: {
    type: String,
    required: [true, 'A tour must have a cover image'],
  },
  images: [String], // images will contain all the image link which are in string form so we store them in an array
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  startDates: [Date], // startDate will contain starting date of tour so its and array of different starting dates for tours
});

//🔸Above we created a schema and now its time to create a model
const Tour = mongoose.model('Tour', tourSchema);

// This is the only thing we want to export so we use default exports
module.exports = Tour;
