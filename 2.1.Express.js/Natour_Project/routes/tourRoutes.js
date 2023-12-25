// const express = require('express');

// // we can also use destructuring in the below tourController function variable.
// // const {getAllTours, getTour, ...} = require('../controllers/tourController');
// // But the below way is also fine
// const tourController = require('../controllers/tourController');

// // its simply a convention here to call it router and not tourRouter
// const router = express.Router();

// router
//   .route('/')
//   .get(tourController.getAllTours)
//   .post(tourController.createTour);
// router
//   .route('/:id')
//   .get(tourController.getTour)
//   .patch(tourController.updateTour)
//   .delete(tourController.deleteTour);

// // export the tourRouter and them we will import it wherever we want to use it
// module.exports = router;

//🔴🔴 Creating a Param Middleware 🔴🔴

// lets create a special type of middleware called param middleware
// so param middleware is a middleware that only runs for certain parameter in our URL
// so in our example here the only parameter we might have in our route URL is the id
// so we can write middleware that only runs when this id is present in the URL
//

// const express = require('express');
// const tourController = require('../controllers/tourController');

// const router = express.Router();
// //🔸Defining params middleware
// // on our router and then the param method, and so here we specify first the parameter
// // that we actually want to search for, basically the paramter for which this middleware is gonna run
// // and its called id then offcourse our actual middleware function and as usual
// // we have access to the request, response object and then next() function since its a middleware function

// // Now in the param middleware function we actually get access to a fourth arguments
// // and that one is the value of the parameter in question in this case its ID
// // we have simply use the param middleware in the tourController and exported it in here
// router.param('id', tourController.checkID);

// router
//   .route('/')
//   .get(tourController.getAllTours)
//   .post(tourController.createTour);
// router
//   .route('/:id')
//   .get(tourController.getTour)
//   .patch(tourController.updateTour)
//   .delete(tourController.deleteTour);

// module.exports = router;

//🔴🔴 Chaining Multiple Middleware Function🔴🔴
const express = require('express');
const tourController = require('../controllers/tourController');

const router = express.Router();
router.param('id', tourController.checkID);

router
  .route('/')
  .get(tourController.getAllTours)
  .post(tourController.checkBody, tourController.createTour);
//  here in post request we are chaining 2 middleware function first we use checkBody to ensure request body contains
//  name and price if not then send error, if yes then move to next middleware which is createTour middleware function
router
  .route('/:id')
  .get(tourController.getTour)
  .patch(tourController.updateTour)
  .delete(tourController.deleteTour);

module.exports = router;
