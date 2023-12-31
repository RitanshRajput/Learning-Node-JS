//
// 🔴🔴 Creating and Mounting Multiple Routes 🔴🔴

// In this we will create one router for each of the resources so that it will cool clean
// and easy to understand and access simply

const fs = require('fs');
const express = require('express');
const morgan = require('morgan');

const app = express();
// MIDDLEWARES
app.use(morgan('dev'));
app.use(express.json());

app.use((req, res, next) => {
  console.log('hello from the middlware 😂😂');
  next();
});
app.use((req, res, next) => {
  req.requestTime = new Date().toLocaleString('en-Us', {
    timeZone: 'Asia/Kolkata',
  });
  next();
});

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);

// TOURS ROUTE HANDLERS
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

// USERS ROUTE HANDLER
const getAllUsers = (req, res) => {
  console.log('get user is called');
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined',
  });
};

const getUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    messsage: 'This route is not yet defined',
  });
};

const createUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    messsage: 'This route is not yet defined',
  });
};

const updateUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    messsage: 'This route is not yet defined',
  });
};

const deleteUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    messsage: 'This route is not yet defined',
  });
};

// TOUR ROUTES
//🔸Creating Router for each resources
// So here we create a new router(express.Router()) and save it into this variable(tourRouter)
// so now we have two router and then route and then get rout and post route on that route
// how do we actually connect this new router with our application, well we will use it as middleware
// Thats because this new modular tourRouter here is actually a real middleware.

//🔸create a middleware router(tourRouter) and connect it with the route('/api/v1/tours')
// where do we want to use tourRouter we do it on '/api/v1/tours'.
// So again this tourRouter here is a real middleware, and we want to use that middleware for this specific route('/api/v1/tours')
// so we use app.use('route to URL', middlewareFunction), so just like this we created a sub application

//🔸so in below routes we only need route('/') and route('/:id') because this tourRouter middleware
//  only runs on this route here('/api/v1/tours') anyway so once we are in the router then we already are at this route('/api/v1/tours')
// So on the first route we only want it to run it as api/v1/tours and so that is what this route here now means ('/')

// so actually when we create a router system like this we actually say that we kind of created a small sub app for each ot these resources

//🔸So basically this is called Mounting, mounting a new route on a router
const tourRouter = express.Router();
const userRouter = express.Router();

tourRouter.route('/').get(getAllTours).post(createTour); // here we only want the root '/'
tourRouter
  .route('/:id') // here we only want the ID '/:id'
  .get(getTour)
  .patch(updateTour)
  .delete(deleteTour);

// USER ROUTE
userRouter.route('/').get(getAllUsers).post(createUser);
userRouter.route('/:id').get(getUser).patch(updateUser).delete(deleteUser);

//🔸Mounting ROUTER after we declare the variables
// so we cannot use router before we actually declare them
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

// START SERVER
const port = 3000;
app.listen(port, () => {
  console.log(`App running on ${port}..`);
});

//
