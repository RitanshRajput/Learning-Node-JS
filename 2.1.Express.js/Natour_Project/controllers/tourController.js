//🔴building real API using real database

const Tour = require('../models/tourModel');

exports.getAllTours = async (req, res) => {
  try {
    // find() is use to query all the document in a collection.
    // this find() method will return an array of all these doc and will
    // also verry nicely convert them into javaScript object.
    const tours = await Tour.find();

    res.status(200).json({
      status: 'success',
      results: tours.length,
      data: {
        tours,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.getTour = async (req, res) => {
  try {
    // findOne() : to find the first match only one document
    // findById() : to find the specified document by its ID
    // so findById() is shorthand for Tour.findOne({ _id: req.params.id })
    const tour = await Tour.findById(req.params.id); //we get this id from tourRoutes.js
    res.status(200).json({
      status: 'success',
      data: {
        tour,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.createTour = async (req, res) => {
  try {
    //🔸Normal way to create a instance of schema, and saving it in database
    // const newTours = new Tour({})
    // newTours.save()

    //🔸advance way of doiing above implementation.
    // so this function returns a promise and rather than doing .then
    // we will make the entire function async await, also in async/await we use try/catch
    const newTour = await Tour.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        tours: newTour,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: 'Invalid data send',
    });
  }
};

exports.updateTour = async (req, res) => {
  try {
    // we will first find the doc with its ID and then update it
    // here using mongoose we can do that in one line
    const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
      new: true, // this is use to send back the new update data
      runValidators: true,
    });
    res.status(200).json({
      status: 'success',
      data: {
        tour, // remember tour is actually { tour : tour } after es6 if the property name has same name of the value we can write it on once
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.deleteTour = async (req, res) => {
  try {
    await Tour.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};
