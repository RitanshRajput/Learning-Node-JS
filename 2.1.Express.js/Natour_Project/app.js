const express = require('express');
const morgan = require('morgan');

// importing the file that we have distributed accordingly
const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

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

// ROUTERs
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

module.exports = app;
