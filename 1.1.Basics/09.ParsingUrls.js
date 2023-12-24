
//      //🔴🔴 Parsing From URLS 🔴🔴 

//🔸 In this lecture we will see how to parse variable from URLs in order to be able to build the product page

// const http = require("http");
// const url = require("url");
// const fs = require("fs");

// const replaceTemplate = (temp, product) => {
//     let output = temp.replace(/{%ProductName%}/g, product.productName);    // here using regular expression also called regex because we want to replace %productName% which is available globally
//     output = output.replace(/{%Image%}/g, product.image);
//     output = output.replace(/{%Price%}/g, product.price);
//     output = output.replace(/{%From%}/g, product.from);
//     output = output.replace(/{%Nutrients%}/g, product.nutrients);
//     output = output.replace(/{%Quantity%}/g, product.quantity);
//     output = output.replace(/{%Description%}/g, product.Description);
//     output = output.replace(/{%Id%}/g, product.id);

//     if(!product.organic) output = output.replace(/{%Not_Organic%}/g, 'not-organic');

//     return output;
// };

// const tempOverview = fs.readFileSync(`${__dirname}/../1-node-farm/starter/templates/template-overview.html`,"utf-8");
// const tempCard = fs.readFileSync(`${__dirname}/../1-node-farm/starter/templates/template-card.html`,"utf-8");
// const tempProduct = fs.readFileSync(`${__dirname}/../1-node-farm/starter/templates/template-product.html`,"utf-8");

// const data = fs.readFileSync(`${__dirname}/../1-node-farm/starter/dev-data/data.json`,"utf-8");
// const dataObject = JSON.parse(data);

// const server = http.createServer((req, res) => {
//     console.log(req.url);
//     console.log(url.parse(req.url, true));
//   const pathName = req.url;

//   // Overview Page
//   if (pathName === "/" || pathName === "/overview") {
//     res.writeHead(200, { "Content-type": "text/html" });

//     const cardsHtml = dataObject.map(elem => replaceTemplate(tempCard, elem)).join('') ;               // to join the html format from array to single string
//     const output = tempOverview.replace('{%Product_Cards%}', cardsHtml);

//     res.end(output);
//   }
//   //Product page
//   else if (pathName === "/product") {
//     res.end("API page is Visible and accessible");
//   }
//   // API
//   else if (pathName === "/api") {
//     res.writeHead(200, { "Content-type": "application/json" });
//     res.end(data);
//   }

//   //NOT FOund
//   else {
//     res.writeHead(404, {
//       "Content-type": "text/html",
//       "my-own-header": "Hello Paaji bhangda paalo",
//     });
//     res.end("<h1>Page Not Found..</h1>");
//   }
// });

// server.listen(8000, "127.0.0.1", () => {
//   console.log("I am working Fit and Fine on port no. 8000 ");
// });


//🔸output:
// console.log(req.url);
// console.log(url.parse())
// ==>
// Url {
//   protocol: null,
//   slashes: null,
//   auth: null,
//   host: null,
//   port: null,
//   hostname: null,
//   hash: null,
//   search: null,
//   query: [Object: null prototype] {},
//   pathname: '/',
//   path: '/',
//   href: '/'
// }

// 🔴before using url.parse(req.url, true) we get error page not found because the Urls
// was not valid because the id of product was not accessible on the Urls the page couldnt find
// the id or page for the product: 
// therefore we used url.parse(req.url, true) , to generate a path including the Product Id and parse it to the Urls
// The second parameter true indicates that the query property should be parsed into an object so we can access its components independently.

//🔸output: 
// console.log(req.url);
// console.log(url.parse(req.url, true));
// ==>
// /product?id=0
// Url {
//   protocol: null,
//   slashes: null,
//   auth: null,
//   host: null,
//   port: null,
//   hostname: null,
//   hash: null,
//   search: '?id=0',
//   query: [Object: null prototype] { id: '0' },
//   pathname: '/product',
//   path: '/product?id=0',
//   href: '/product?id=0'
// }

//🔴Here above we can see the proper parsing of id (?id=0) and the route (/product?id=0)
// after using  console.log(url.parse(req.url, true));


//🔸Implementation of parsing of variable from URLs

// const http = require("http");
// const url = require("url");
// const fs = require("fs");

// const replaceTemplate = (temp, product) => {
//   let output = temp.replace(/{%ProductName%}/g, product.productName); // here using regular expression also called regex because we want to replace %productName% which is available globally
//   output = output.replace(/{%Image%}/g, product.image);
//   output = output.replace(/{%Price%}/g, product.price);
//   output = output.replace(/{%From%}/g, product.from);
//   output = output.replace(/{%Nutrients%}/g, product.nutrients);
//   output = output.replace(/{%Quantity%}/g, product.quantity);
//   output = output.replace(/{%Description%}/g, product.Description);
//   output = output.replace(/{%Id%}/g, product.id);

//   if (!product.organic)
//     output = output.replace(/{%Not_Organic%}/g, "not-organic");

//   return output;
// };

// const tempOverview = fs.readFileSync(
//   `${__dirname}/../1-node-farm/starter/templates/template-overview.html`,
//   "utf-8"
// );
// const tempCard = fs.readFileSync(
//   `${__dirname}/../1-node-farm/starter/templates/template-card.html`,
//   "utf-8"
// );
// const tempProduct = fs.readFileSync(
//   `${__dirname}/../1-node-farm/starter/templates/template-product.html`,
//   "utf-8"
// );

// const data = fs.readFileSync(
//   `${__dirname}/../1-node-farm/starter/dev-data/data.json`,
//   "utf-8"
// );
// const dataObject = JSON.parse(data);


// const server = http.createServer((req, res) => {
//   const { query, pathname} = url.parse(req.url, true);

//   // Overview Page
//   if (pathname === "/" || pathname === "/overview") {
//     res.writeHead(200, { "Content-type": "text/html" });

//     const cardsHtml = dataObject
//       .map((elem) => replaceTemplate(tempCard, elem))
//       .join(""); // to join the html format from array to single string
//     const output = tempOverview.replace("{%Product_Cards%}", cardsHtml);

//     res.end(output);
//   }
//   //Product page
//   else if (pathname === "/product") {
//     console.log(query);
//     res.end("Product page is Visible and accessible");
//   }
//   // API
//   else if (pathname === "/api") {
//     res.writeHead(200, { "Content-type": "application/json" });
//     res.end(data);
//   }

//   //NOT FOund
//   else {
//     res.writeHead(404, {
//       "Content-type": "text/html",
//       "my-own-header": "Hello Paaji bhangda paalo",
//     });
//     res.end("<h1>Page Not Found..</h1>");
//   }
// });

// server.listen(8000, "127.0.0.1", () => {
//   console.log("I am working Fit and Fine on port no. 8000 ");
// });


//🔴after using query and and pathname from destructuring the url.parse() method 
// we get 
//   query: [Object: null prototype] { id: '0' },
//   pathname: '/product',
// And now we can use this to send the specific page for our products in the browser

//🔸output: on URL (http://localhost:8000/product?id=0)
// [Object: null prototype] { id: '0' }


//🔴main code :

const http = require("http");
const url = require("url");
const fs = require("fs");

const replaceTemplate = (temp, product) => {
  let output = temp.replace(/{%ProductName%}/g, product.productName); // here using regular expression also called regex because we want to replace %productName% which is available globally
  output = output.replace(/{%Image%}/g, product.image);
  output = output.replace(/{%Price%}/g, product.price);
  output = output.replace(/{%From%}/g, product.from);
  output = output.replace(/{%Nutrients%}/g, product.nutrients);
  output = output.replace(/{%Quantity%}/g, product.quantity);
  output = output.replace(/{%Description%}/g, product.description);
  output = output.replace(/{%Id%}/g, product.id);

  if (!product.organic)
    output = output.replace(/{%Not_Organic%}/g, "not-organic");

  return output;
};

const tempOverview = fs.readFileSync(
  `${__dirname}/../1-node-farm/starter/templates/template-overview.html`,
  "utf-8"
);
const tempCard = fs.readFileSync(
  `${__dirname}/../1-node-farm/starter/templates/template-card.html`,
  "utf-8"
);
const tempProduct = fs.readFileSync(
  `${__dirname}/../1-node-farm/starter/templates/template-product.html`,
  "utf-8"
);

const data = fs.readFileSync(
  `${__dirname}/../1-node-farm/starter/dev-data/data.json`,
  "utf-8"
);
const dataObject = JSON.parse(data);


const server = http.createServer((req, res) => {
  const { query, pathname} = url.parse(req.url, true);

  // Overview Page
  if (pathname === "/" || pathname === "/overview") {
    res.writeHead(200, { "Content-type": "text/html" });

    const cardsHtml = dataObject
      .map((elem) => replaceTemplate(tempCard, elem))
      .join(""); // to join the html format from array to single string
    const output = tempOverview.replace("{%Product_Cards%}", cardsHtml);

    res.end(output);
  }
  //Product page
  else if (pathname === "/product") {
    res.writeHead(200, { "Content-type": "text/html" });
    const product = dataObject[query.id];   // this is the simplest way of retreving an element based on a query string
    const output = replaceTemplate(tempProduct, product);

    res.end(output);
  }
  // API
  else if (pathname === "/api") {
    res.writeHead(200, { "Content-type": "application/json" });
    res.end(data);
  }

  //NOT FOund
  else {
    res.writeHead(404, {
      "Content-type": "text/html",
      "my-own-header": "Hello Paaji bhangda paalo",
    });
    res.end("<h1>Page Not Found..</h1>");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("I am working Fit and Fine on port no. 8000 ");
});

//🔴 Now we can access details page, after parsing the the Id variable to URLs
// parsing is a cool nodeJs method to send the id and more to the URLS 

//🔥 1st Project completed