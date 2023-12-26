//🔴🔴  Environment Variables 🔴🔴

// So environment variable has less to do with express but more with NODEjs development in general
// SO nodeJs and Express apps can run in different environment and the Most important ones
// are the development environment and the production environment.

// Thats because depending upon the environment we might use different databases for example
// or we might turn login on or off, or we might turn debugging on or off
// or really all kinds of different setting that might change depending on the
// development that we're in.

// So again the most important ones are development environment and production environment but
// are other environments that bigger teams might use. So this type of setting mentioned above
// like different databses or login turned on or off. that will be based on environment variables
// Now by default express sets the environment to development which makes a lot of sense because thats what
// we're doing when we start a new project. so lets just for the sake of demonstration
// take a look at that variable.

// we will do that in the code of server.js
//🔸So everything not related to express we will do it outside the app.js file
// the environment variable are really outside the scope of express

// const app = require('./app');

// console.log(app.get('env'));
//🔸output: development
// so that is the environment we are currently in.
// as we see that this app.get('env') will get us env environment variable.

// so in summary environment variable are global variables that are used to define the environment in
// which a node app is running. so this one ('env') is set by express but nodeJs itself
// actually sets a lot of environment. so lets see those as well
//🔸so this ones are located at process.env
// console.log(process.env);
// output: a bunch of different variables seen in the console

//🔸There are many environment variable that for some reasons nodeJs internatlly need
// now these variables they come from the process core module. and we're set at the
// moment that the process started. and as you see we didn't have to require the process module right
// it is simply available everywhere automatically.

//🔸Now in express many packages depend on a special variable called Node ENV.
// So its a variable thats Kind of a convention which should define whether
// we're in development mode or in production mode okay.

// however express does not define this variables and so we have to do that manually.
// there are multiple ways in which we can do it. but lets start with the easiest one
// which is to use the terminal.

// So as we use npm start which is set to (nodemon server.js) which we use to start the process
// but if you want to set an environment variable for this process, we need to pre-plan that variable
//🔴to this command so we say for (windows) SET NODE_ENV=development & nodemon server.js
// and for (linux or mac) NODE_ENV=development nodemon server.js

// and if we start the process now we can see bunch of variables and within this
// we can see there is Node ENV set to development ( NODE_ENV: 'development ',)

//🔴So again many packages on npm that we use for express development actually depend on this
// environment variable and so when our project is ready and we are gonna deploy it.
// we then should change the NODE ENV and variable to Production and we will do that of
// course once we deploy the project by the end of the project.

// So whenever our apps needs some configuration for stuff that might change based on the environment
// that the app is running in we use environment variable. for exampple we might use
// different databases for development for testing until could define one variable for each
// and then activate the right database according the environment also we could set
// sensitive data  like passwords and username using environment variables.
// we cannot or should not create all the variable one by one on the terminal
// so thats why we use a configuration file.

//🔴🔴 WOrking of ENvironment variable 🔴🔴

//🔸🔸🔸 SERVER.JS🔸🔸🔸

const dotenv = require('dotenv');
// and here we can simply use dotenv.config(and pass in the config.file path)
dotenv.config({ path: './config.env' });
// now this command will read the variable from the file and save them in NODEJS environment varaible
// Now our variable set in config.env are now set in nodejs env variable
console.log(process.env); // we can see them using this log

const app = require('./app');

// START SERVER

// lets say that the port should either be the one coming
// from the environment or this 3000
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`App running on ${port}..`);
});

//🔸🔸🔸 config.env🔸🔸🔸

// # .env is a convention for ENV file in this file we can define
// # our variable or user password it store the data in key-value format
// # Now how to we actually connect this .env file with our node application
// # we need some way of reading this file and then saving them as environment variables.
// # because right now this is just a text file and nodeJs has no way of knowing that
// # these variable are in here.

// # so for that the standard is kind of using a npm package called .env
// # npm install dotenv
// # now lets go over to our server.js and actually require it
// NODE_ENV=development=development
// PORT=3000
// USER=ritansh
// PASSWORD=123456

//🔸🔸🔸 APP.JS 🔸🔸🔸
const express = require('express');
const morgan = require('morgan');

const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();

// MIDDLEWARES

//🔸 Using env varaible, to say that when we are in development then only use morgan
// as we cann also see we have not require or define process.env.NODE_ENV still we can use
// it that is because it now set on the NODE environment so it can be used anywhere within the projects
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
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
