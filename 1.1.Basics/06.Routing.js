
//      //🔴🔴 Routing in NodeJS

//🔸 Routing basically means implementing different actions for different URLS

//🔸lets say: we have a server http://localhost:8000
// now we might have on many website that when we try to visit different page on the same website
// the url changes and we see different pages right:
// for example: suppose there is a ecommerse website with web url as
// https://www.ecommerce.com/
// Now if we try to visit mens clothing page, then the website take us to new page
// with change in URL i.e: https://www.ecommerce.com/#mensclothing
// This is what we called Routing

//🔸lets create a server and see how to implement routing: 

//      const http = require("http");
//      const url = require("url");

//      const server = http.createServer((req, res) => {
//          console.log(req.url);
//          res.end("Hello from the server") ;
//      });

//      server.listen(8000, '127.0.0.1', () => {
//          console.log("I am working Fit and Fine on port no. 8000 ");
//      });

//output for console.log(req.url):
// /                  (/ means we have got a url)
// /favicon.ico       (/favicon.ico website calls req.url to automatically generate a favicon for website)

//🔸 Now if we type /overview on our port 8000
// http://localhost:8000/overview

//output: on console
// /overview
// /favicon.ico


//🔸Routing implementation code :

//   const http = require("http");
//   const url = require("url");

//   const server = http.createServer((req, res) => {
//       const pathName = req.url;

//       if(pathName === '/' || pathName === '/overview'){
//           res.end("You are at OVERVIEW Page");
//       }
//       else if(pathName === '/product'){
//           res.end("This is your product page ....");
//       }
//       else{
//           res.writeHead(404);
//           res.end("Page NOt FOund") ;
//       }
//   });

// server.listen(8000, '127.0.0.1', () => {
//     console.log("I am working Fit and Fine on port no. 8000 ");
// });


//🔸 request.url (req.url) ==> can fetch us the current URL from the webpage 
// example: http://localhost:8000, http://localhost:8000/overview, http://localhost:8000/product

//🔸 req.writeHead() => This can help us show the status codes (like 404) 
// also it can send headers (what is header anyway❓) 
// an http header is basically a piece of information about the response that we are sending back.( 404, 204, etc)



//🔸 writeHead Headers:

const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
    const pathName = req.url;

    if(pathName === '/' || pathName === '/overview'){
        res.end("You are at OVERVIEW Page");
    }
    else if(pathName === '/product'){
        res.end("This is your product page ....");
    }
    else{
        res.writeHead(404, {
            'Content-type': 'text/html',
            'my-own-header': 'Hello Paaji bhangda paalo'
        });
        res.end("<h1>Page Not Found..</h1>") ;
    }
});

server.listen(8000, '127.0.0.1', () => {
    console.log("I am working Fit and Fine on port no. 8000 ");
});


//🔸'Content-type': 'text/html' => with this now our browser is not expecting a html file
//res.end("<h1>Page Not Found..</h1>") ;  like this we can send html to browser
//🔸 we can also create our own header like we did above [ 'my-own-header': 'Hello Paaji bhangda paalo' ]

//🔴NOTE: the headers or status code always to send before we send any response content

//🔸Now if we try to visit that is not defines ( like: http://localhost:8000/produ) it shows PAGE NOT FOUND in h1 tag
// also if we go to network tab in developer tools, and go to headers by clicking on the non specifies /name we can see the header
// we see ==>
// Request URL:     http://localhost:8000/produ
// Request Method:  GET
// Status Code:     404 Not Found
// Remote Address:  127.0.0.1:8000
// Referrer Policy: strict-origin-when-cross-origin
// Connection:      keep-alive
// Content-Type:    text/html
// Date:            Sun, 10 Dec 2023 09:29:10 GMT
// Keep-Alive:      timeout=5
// My-Own-Header:   Hello Paaji bhangda paalo
// Transfer-Encoding:  chunked


// 🔸 Now if we visit page that is defined (  http://localhost:8000/product) and again visit network tab in inspect developer tool
// we see ==>
// Request URL:     http://localhost:8000/product
// Request Method:  GET
// Status Code:     200 OK
// Remote Address:  127.0.0.1:8000
// Referrer Policy: strict-origin-when-cross-origin
// Connection:      keep-alive
// Content-Length:  30
// Date:           Sun, 10 Dec 2023 09:35:31 GMT
// Keep-Alive:     timeout=5


//🔴Note: 
// That this routes that we define in our code and the routes that the routes that we put
// in the URLs in the browser have nothing to do with the file and folders in our project file system

// Like as a beginner we may think that if we add /06.Routing and the browser will try to connect us to
// the page with This file detail but no, we have to define a 06.Routing inside the router
// specifically and then send a special respionse for only that route