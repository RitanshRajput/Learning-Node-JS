// /* eslint-disable node/no-unsupported-features/es-syntax */
// //🔴🔴 Adding Filtering in our API to make it much better

// const Tour = require('../models/tourModel');

// exports.getAllTours = async (req, res) => {
//   try {
//     // we first check req.query it helps us to get the query like ( /api/v1/tours/?difficulty=easy&duration=58)
//     // here { difficulty: 'easy', duration: '58' } this the filtered query that is requested
//     console.log(req.query);

//     // so there are 2 ways to filtering 1st one just we did in the mongoDb intro section
//     // and 2nd way is to use some special monogoose methods
//     //
//     //🔸1st normal way to filtering :
//     // const tours = await Tour.find({
//     //   duration: 5,
//     //   difficulty: 'easy',
//     // });

//     //🔸2nd way using mongoose method
//     // const tours = await Tour.find()
//     //   .where('duration')
//     //   .equals(5)
//     //   .where('difficulty')
//     //   .equals('easy');

//     //🔸Here we are first creating a shallow copy of req.query object
//     //  so here we need a really hard copy we can't just do, req.query
//     // because if you delete from queryObj we would also delete it from req.query
//     // and thats because in jaavscript when we set a variable to another object
//     // then that new var will basically just be a reference to that original object
//     // so we really need a hard copy here.
//     // In javascript theres not really a built-in way of doing this but a very nice tricl that we can use
//     // since es6 is to use first destructuring and then we can simply create a new object from that
//     // so destructuring here (this ... dot) will basically take all the fields out of the object
//     // and here with the curly braces we simply create a new object

//     const queryObj = { ...req.query };
//     // now create an array of all the field that we want to exclude
//     // so we will use this commands page sort limit etc later
//     const excludeFields = ['page', 'sort', 'limit', 'fields'];

//     // next we will do remove all this query from our queryObj we will do that using lloop
//     excludeFields.forEach((el) => delete queryObj[el]);

//     // console.log(req.query, queryObj);
//     //we use : /api/v1/tours/?difficulty=easy&sort=1&limit=10
//     // req.query : { difficulty: 'easy', sort: '1', limit: '10' }
//     // queryObj : { difficulty: 'easy' }

//     //We will be using 1st way because we have req.query
//     const tours = await Tour.find(queryObj);

//     res.status(200).json({
//       status: 'success',
//       results: tours.length,
//       data: {
//         tours,
//       },
//     });
//   } catch (err) {
//     res.status(404).json({
//       status: 'fail',
//       message: err,
//     });
//   }
// };

// exports.getTour = async (req, res) => {
//   try {
//     const tour = await Tour.findById(req.params.id);
//     res.status(200).json({
//       status: 'success',
//       data: {
//         tour,
//       },
//     });
//   } catch (err) {
//     res.status(404).json({
//       status: 'fail',
//       message: err,
//     });
//   }
// };

// exports.createTour = async (req, res) => {
//   try {
//     const newTour = await Tour.create(req.body);

//     res.status(201).json({
//       status: 'success',
//       data: {
//         tours: newTour,
//       },
//     });
//   } catch (err) {
//     res.status(400).json({
//       status: 'fail',
//       message: err,
//     });
//   }
// };

// exports.updateTour = async (req, res) => {
//   try {
//     const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
//       new: true,
//       runValidators: true,
//     });
//     res.status(200).json({
//       status: 'success',
//       data: {
//         tour,
//       },
//     });
//   } catch (err) {
//     res.status(404).json({
//       status: 'fail',
//       message: err,
//     });
//   }
// };

// exports.deleteTour = async (req, res) => {
//   try {
//     await Tour.findByIdAndDelete(req.params.id);
//     res.status(204).json({
//       status: 'success',
//       data: null,
//     });
//   } catch (err) {
//     res.status(404).json({
//       status: 'fail',
//       message: err,
//     });
//   }
// };

/* eslint-disable node/no-unsupported-features/es-syntax */

//🔴🔴 Adding advance technique to filtering
const Tour = require('../models/tourModel');

exports.getAllTours = async (req, res) => {
  try {
    //BUILD QUERY
    const queryObj = { ...req.query };
    const excludeFields = ['page', 'sort', 'limit', 'fields'];
    excludeFields.forEach((el) => delete queryObj[el]);

    // so this Tour.find(queryObj) returns a result and then we use that result to
    // chaining like using mongoose query method .where().equals()...
    // so soon as we actually await the result of the query , the query will then
    // execute and come back with the document that actually match our query
    // and so If we do it like this such as have here below then there is no way of later
    // implementing sorting or pagination or all of these other features, so instead
    // what we will have to do is to save this part (Tour.find(queryObj)) into a query
    // and in the end as soon as we change all the methods into the query we need to
    // only then by the end we can await that query,

    // for example: we're going to use the sort method, limit , pagination method,etc
    // and chain them to this query (Tour.find(queryObj)) and thatwould be impossible to
    // do again if we await the result of this initial query (Tour.find(queryObj)) right away

    // const tours = await Tour.find(queryObj);

    // the way that we will do it, is that we will have our tours down here
    // will have our tours down here and this will await query, and this query is
    // is simply the query without any await
    const query = Tour.find(queryObj);
    // EXECUTE QUERY
    const tours = await query;

    // SEND RESPONSE
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
    const tour = await Tour.findById(req.params.id);
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
      message: err,
    });
  }
};

exports.updateTour = async (req, res) => {
  try {
    const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
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
