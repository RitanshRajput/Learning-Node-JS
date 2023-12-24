//🔴🔴 Event driven architecture  🔴🔴

//🔴🔴 Event emitter and event listener in practice

// const EventEmitter = require("events");

// const myEmitter = new EventEmitter(); // creating a new instance of event emitter

// myEmitter.on("newSale", () => {
//   console.log("There was a new sale");
// });

// myEmitter.on("newSale", () => {
//   console.log("Constumer name: Ritz");
// });
// //🔸we can set multiple listener for the same event

// myEmitter.emit("newSale");

//🔸output:
// There was a new sale
// Constumer name: Ritz
//
//
//
//
//
//
//🔸 passing arguments in event listener
// const EventEmitter = require("events");

// const myEmitter = new EventEmitter(); // creating a new instance of event emitter

// myEmitter.on("newSale", () => {
//   console.log("There was a new sale");
// });

// myEmitter.on("newSale", (stock) => {
//   console.log(`There are now ${stock} items left in stock !`);
// });

// myEmitter.emit("newSale", 9);

//🔸output:
// There was a new sale
// There are now 9 items left in stock !
//
//
///
//
//
//
//🔴class inheritance in Events  (using es6)
// const EventEmitter = require("events");

// class Sales extends EventEmitter {
//   // sales is parent class and EventEmitter is superclass
//   constructor() {
//     super(); // we need super, that we do when we extend a superclass
//     // by writing super we then get access or inherit to all the features of parent class
//   }
// }

// const myEmitter = new Sales(); // creating a new instance of event emitter

// myEmitter.on("newSale", () => {
//   console.log("There was a new sale");
// });

// myEmitter.on("newSale", (stock) => {
//   console.log(`There are now ${stock} items left in stock !`);
// });

// myEmitter.emit("newSale", 9);
//🔸output:
// There was a new sale
// There are now 9 items left in stock !
//
//
//
//🔴How Event driven architecture works in HTTP
const EventEmitter = require("events");
const http = require("http");

const server = http.createServer();

server.on("request", (req, res) => {
  console.log("REquest received");
  console.log(req.url);
  res.end("Request Received");
});
// 'request' is when there is an request on server
server.on("request", (req, res) => {
  console.log("Another Request Received 🔥");
});

server.on("close", () => {
  console.log("Server closed");
});
// 'close' when the server closes down

//start the server
server.listen(8000, "127.0.0.1", () => {
  console.log("Waiting for request...");
});

//🔸output:
// Waiting for request...
// REquest received
// /                              // first request was for root url
// Another Request Received 🔥
// REquest received
// /favicon.ico                 // another request was for favicon.ico
// Another Request Received
