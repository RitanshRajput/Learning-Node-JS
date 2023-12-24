
//   🔴 Creating Simple Web Server
// To create a web server we use 'http' module

const http = require('http');

//🔸Creating a server:
http.createServer((request, response) => {
    response.end('Hello from the server!!!') ;
});

// response is use to send information to the client side
// each time that a new request hits our server, the above callback function will get called;
// and the callback function will have access to the request object which holds all kind of stuff
// like: request URL, and a bunch of other stuff
// On the other hand response object is used for dealing with the response for sending out the response
// the basic one is .end() , this is the simplest way of sending back a very very simple response in this case (hello from server!!)

//🔸Listen to incoming requests from the clients

//      const server = http.createServer((req, res) => {
//          res.end('Hello from the server!!') ;
//      });
    
//      server.listen(8000, '127.0.0.1', ()=> {
//          console.log('Listening to requests on port  8000');
//      }) ;

// output:
// Listening to requests on port  8000

// type : http://localhost:8000 on web browser
// output: Helllo from the server!!


//🔸so server will listen to the request and listen it on port number 8000 
// listen takes two argument (port NUmber, standard IP address for the local host)
// it also takes in optional argument which is a callback function that runs as soon it actually start listening

//❓What is actually happening here:
// So we created our server, using createServer and passed in a callback function that is executed each time that a new request hits the server
// and then we started listening for incoming request on the localHOst IP(1287.0.0.1) and then on 
// port 8000.
// Once we had all this running, we actually did the request by hitting that URL( http://localhost:8000)
// and under the hood an event was called that that made it so the (req,res) =>{} callback function was called
// and as the result of that we then got the string (Helllo from the server!!)


// 🔸getting Request Object 
const server = http.createServer((req, res) => {
    console.log(req);
    res.end('Hello from the server!!') ;
});

server.listen(8000, '127.0.0.1', ()=> {
    console.log('Listening to requests on port  8000');
}) ;


// output: try rehitting the localhost: 8000 
// A huge block of request code will appear on console