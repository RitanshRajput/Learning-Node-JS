// 🔴 How to create our Own modules

//🔸 In this lecture lets learn how to create our own modules and export somthing from
// them like for examples a function and then import that function into another module and
// then use that function there.

//For this we will use previous project as a example to make replaceTemplate function into
// a module and use it in our file

const http = require("http");
const url = require("url");
const fs = require("fs");
const replaceTemplate = require("../1-node-farm/modules/replaceTemplate");

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

const data = fs.readFileSync(`${__dirname}/../1-node-farm/starter/dev-data/data.json`, "utf-8");
const dataObject = JSON.parse(data);

const server = http.createServer((req, res) => {
  const { query, pathname } = url.parse(req.url, true);

  // Overview Page
  if (pathname === "/" || pathname === "/overview") {
    res.writeHead(200, { "Content-type": "text/html" });

    const cardsHtml = dataObject.map((elem) => replaceTemplate(tempCard, elem)).join(""); // to join the html format from array to single string
    const output = tempOverview.replace("{%Product_Cards%}", cardsHtml);

    res.end(output);
  }
  //Product page
  else if (pathname === "/product") {
    res.writeHead(200, { "Content-type": "text/html" });
    const product = dataObject[query.id]; // this is the simplest way of retreving an element based on a query string
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

//output: Project still working fine
