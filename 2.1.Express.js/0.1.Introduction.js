//  🔴🔴 What is Express and Why should we use it?

//🔸So Express.js is a minimal NodeJs Framework a which means it is actually built on top of Node.Js
//  basically its a higher level of abstraction.
//🔸Behind the scene express is written 100% in node.js code
//🔸So express contains a very robust and very useful set of features things like complex routing,
//  easier handling of requests and responses, adding middleware, server-side rendering, etc.
//🔸This allows us write node.js applications so much faster than before, because we dont have to
//  reinvent the wheel, basicallly, we dont have to repeat the same code over and over again each
//  time that we need to implement some really complex routing for example or some templating system
//  or something like that. so all of that already included in express ready for use.
//🔸Express makes it easy to organise our application into the MVC architecture, which is a very popular
//  software architecture pattern. that we'll explore in upcoming lesson.

//🔘Lets download another tool called Postman, which is used for API testing
// its a little bit like a browser but it doesnt render any html or any visible website to us
// instead we can do all kinds of requests and then recieve the response simply as text then work with that
// repsonse

//🔴Lets work on a new project called NatourProject
//🔴🔴Basics Express :

// const express = require('express');

// const app = express(); // so express is a method which upon calling will add a bunch of methods to our apps variable here

// app.get('/', (req, res) => {
//   res.status(200).send('Hello from the server side!');
// });
// // routing means basically to determine how an app responds to certain client resquest so to a certain URL
// // and actaully its not just a url but also the hTTP methods which is used for that request
// // how to create a route in express:
// // app.httpMethodThatWeWantToRespondTo('/then the URL')
// // so what we want to do is whenever someone hits this get request we want something to happen and
// // we need to specify it in a callback function, which we specify as the second arguments

// const port = 3000;
// app.listen(port, () => {
//   console.log(`App running on port ${port}...`);
// });

//🔴🔴Postman:
// goto postman and hit the url with :
// GET :  127.0.0.1:3000/

//output: Hello from the server side!

//🔘🔘Sending JSON
// const express = require('express');

// const app = express();

// app.get('/', (req, res) => {
//   res
//     .status(200)
//     .json({ message: 'Hello from the server side!', app: 'Natours' });
// });
// // lets add some more stuff here because .send() simply the string written inside back to the client.
// // It is also very easy to send JSON to the client, so instead of using send lets use JSON

// const port = 3000;
// app.listen(port, () => {
//   console.log(`App running on port ${port}...`);
// });

//🔴postman:
// after hitting the same port: 127.0.0.1 : 3000

//🔸output:
// {
//     "message": "Hello from the server side!",
//     "app": "Natours"
// }

//🔘🔘 Some new stuff:
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res
    .status(200)
    .json({ message: 'Hello from the server side!', app: 'Natours' });
});
// Here by using the JSON method for example above one, this will automatically set out content type to Application JSON
// remember we did that manually inthe nodefarm app when we created our very simple API

app.post('/', (req, res) => {
  res.send('You can post to this endpoint...');
});
// using POST http method in express to POST something on client side

const port = 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

//🔴postman:
// after hitting the same port: 127.0.0.1 : 3000

//🔸output:
// GET :
// {
//     "message": "Hello from the server side!",
//     "app": "Natours"
// }

// POST :
// You can post to this endpoint..
