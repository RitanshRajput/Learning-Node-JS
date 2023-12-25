// const express = require('express');
// const morgan = require('morgan');

// // importing the file that we have distributed accordingly
// const tourRouter = require('./routes/tourRoutes');
// const userRouter = require('./routes/userRoutes');

// const app = express();

// // MIDDLEWARES
// app.use(morgan('dev'));
// app.use(express.json());

// app.use((req, res, next) => {
//   console.log('hello from the middlware 😂😂');
//   next();
// });
// app.use((req, res, next) => {
//   req.requestTime = new Date().toLocaleString('en-Us', {
//     timeZone: 'Asia/Kolkata',
//   });
//   next();
// });

// // ROUTERs
// app.use('/api/v1/tours', tourRouter);
// app.use('/api/v1/users', userRouter);

// module.exports = app;

//
//
//    🔴🔴 Serving Static Files🔴🔴

// what is static file, its the file that are sitting in our file system, that we
// currently cannot access using all routes. so for example we have this overview.html file in our public folder
// but right now theres no way that we can access this using the browser and the same for these images files
// that we have here or the CSS or the Javscript files
// like for example we cannot just goto the browser and type localhost:3000/public/overview.html and start to use it
// because right now we donot have any handler that is associated to this route.

// And we have want to use something from our file system we need to use a built-in express middleware.

// const express = require('express');
// const morgan = require('morgan');

// const tourRouter = require('./routes/tourRoutes');
// const userRouter = require('./routes/userRoutes');

// const app = express();

// MIDDLEWARES
// app.use(morgan('dev'));
// app.use(express.json());

////🔸 we use a middleware like this
// app.use(express.static(`${__dirname}/public`));
// Now we will be able to see our overview.html file in browser
// http://127.0.0.1:3000/overview.html

// Now here as we can see we dont need public folder in URL, simply because when we open a URL
// that it can't find in any of our routes it will then look in that public folder that we defined
// and its kind of sets that folder to the root, so lets pretend now that the root now is the public folder(127.0.0.1:3000)
// so thats why we have now access to it.

// lets check another file in public: http://127.0.0.1:3000/img/pin.png  this opens an image which is in public folder

// app.use((req, res, next) => {
//   console.log('hello from the middlware 😂😂');
//   next();
// });
// app.use((req, res, next) => {
//   req.requestTime = new Date().toLocaleString('en-Us', {
//     timeZone: 'Asia/Kolkata',
//   });
//   next();
// });

// // ROUTERs
// app.use('/api/v1/tours', tourRouter);
// app.use('/api/v1/users', userRouter);

// module.exports = app;

//   🔴🔴  Using Environment variable in express login
// eslint-disable-next-line prettier/prettier
const express = require('express');
const morgan = require('morgan');

const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();

console.log(process.env.NODE_ENV); // env variable check, lets us know in which environment we are development or production

// MIDDLEWARES
app.use(morgan('dev'));
app.use(express.json());

app.use(express.static(`${__dirname}/public`));

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

// ROUTERs
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

module.exports = app;
