//
//        🔴🔴 Creating Our Own Middleware 🔴🔴
const fs = require('fs');
const express = require('express');

const app = express();

// In order to use middleware we use .use method to actually use middlware
// so add middlware to our middleware stack
// So this express.json() here calling this json() method basically returns a function so that
// so that function is then added to the middleware stack.
app.use(express.json());

//🔸creating another middleware.
// as we remember in each middleware function
// we have access to the request and the response and also we have the next() function as the third arguments
// and like express then knows that we are defining a middleware
// So the below middleware will be applied to each and every single request and
// thats because we didnt specify any route. So as we have seen before that all the route handler are middleware themselves.
// They are simply middleware functions that only apply for a certain URL.
// But this middleware functions there are goiing to apply on every single request
// atleast if the route handler comes before this middleware.

//🔸 SO usually we define this kind of global middleware here before all our route handlers
// so this is one very simple middleware function that we just define to run some code.

app.use((req, res, next) => {
  console.log('hello from the middlware 😂😂');
  next();
});
//🔸if we dont specify next() in the above middleware function then the request-response cycle will be stuck here
//  and it will not move forward, therefore next() is really really important
//  therefore never ever forget to use next() in all our middleware

//🔸Lets create another middleware, ofcourse we can as many middleware functions as we like
//  and this time we will try to manipulate the request object.
//  In this case we will add the current time to the request.
//  for that we can simply define a property on request object called requestTime.
//  and then set it to new date which basically translates to right now, then we can use a very handy date function
//  called toISOString() which will then convert it to nice readable string for us.
// or we can use toLocaleString('en-Us', {timeZone: 'Asia/Kolkata'}), which gives indian current date and time
//🔸So lets assume we have a route handler which need the information of when the route happens
//  so the very simple solution is to simply add something like this to request using middleware
app.use((req, res, next) => {
  req.requestTime = new Date().toLocaleString('en-Us', {
    timeZone: 'Asia/Kolkata',
  });
  next();
});
// Dont forget to add next();

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);

const getAllTours = (req, res) => {
  console.log(req.requestTime);
  res.status(200).json({
    status: 'success',
    requestAt: req.requestTime,
    results: tours.length,
    data: {
      tours,
    },
  });
};
//output:
// "requestAt": "2023-12-22T14:00:39.812Z",
// console = hello from the middlware 😂😂
//           12/22/2023, 7:34:31 PM

const getTour = (req, res) => {
  console.log(req.params);
  const id = req.params.id * 1;
  const tour = tours.find((el) => el.id === id);
  if (!tour) {
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid ID',
    });
  }

  res.status(200).json({
    status: 'success',
    data: {
      tour,
    },
  });
};

const createTour = (req, res) => {
  const newId = tours[tours.length - 1].id + 1;
  const newTour = Object.assign({ id: newId }, req.body);
  tours.push(newTour);

  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    (err) => {
      res.status(201).json({
        status: 'success',
        data: {
          tours: newTour,
        },
      });
    }
  );
};

const updateTour = (req, res) => {
  if (req.params.id * 1 > tours.length) {
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid ID',
    });
  }

  res.status(200).json({
    status: 'success',
    data: {
      tour: '<Updated tour here...>',
    },
  });
};

const deleteTour = (req, res) => {
  if (req.params.id * 1 > tours.length) {
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid ID',
    });
  }

  res.status(204).json({
    status: 'success',
    data: null,
  });
};

app.route('/api/v1/tours').get(getAllTours).post(createTour);
//🔸What happens if we apply a middleware here and we make a call to the above route
// the respond will be same, but we couldnt see the console.log('hello from the middleware
// its because the route handler comes before this middleware wherer getAllTours ends the request response cycle
// by sending result like this ( res.status(200).json({})  ) with res.json() in the getAllTours we actually end
// the request response cycle. and so next middleware in the stack which in this case it the below one ( app.use(res, req, next) )
// so our custom one will then not be called. because the cycle has already been finished.
// so make sure that the order of middleware really matters a lot in express

// app.use((req, res, next) => {
//   console.log('hello from the middlware 😂😂');
//   next();
// });
//

//🔸what happens if we call the below route after the custom middleware
// now after requesting any below http request we can see that there is a response
// on the console for "Hello from the middleware 😂"
// That is because of course the above middleware custom one app.use() is before the route handler
// so it is of course part of the middleware stack that get executed before the request response cycle ends
//
app
  .route('/api/v1/tours/:id')
  .get(getTour)
  .patch(updateTour)
  .delete(deleteTour);

const port = 3000;
app.listen(port, () => {
  console.log(`App running on ${port}..`);
});
//
//
//
//

//    🔴🔴 Using 3rd-party Middleware 🔴🔴

//  🔘 Morgan :
// Morgan is another HTTP request logger middleware for Node. js.
// It simplifies the process of logging requests to your application.
// Using Morgan and Winston Together. Winston gives you a lot more flexibility
// with additional transports and also makes it easy to query your logs for analysis.
//🔸It is not a development dependecy but is a simple regular dependency.

const express = require('express');
const morgan = require('morgan');

// MIDDLEWARES
app.use(morgan('dev'));
// so calling this morgan function will return a function similar to the below
// one like : (req, res, next) => {}
// because while this is how a middleware function has to look and we can check its github source code that it exports the code same as (req, res, next) => {}
// 🔸 output: 'dev'
// GET /api/v1/tours 200 39.677 ms - 8815

// 🔸 output: 'dev'
// GET /api/v1/tours 200 8815 - 40.212 ms

// Try to use morgan app.use(morgan('dev')) in above code you will see the output.
