//  🔴🔴HTML Templating: FIlling the Templates

const http = require("http");
const url = require("url");
const fs = require("fs");

const replaceTemplate = (temp, product) => {
    let output = temp.replace(/{%ProductName%}/g, product.productName);    // here using regular expression also called regex because we want to replace %productName% which is available globally
    output = output.replace(/{%Image%}/g, product.image);
    output = output.replace(/{%Price%}/g, product.price);
    output = output.replace(/{%From%}/g, product.from);
    output = output.replace(/{%Nutrients%}/g, product.nutrients);
    output = output.replace(/{%Quantity%}/g, product.quantity);
    output = output.replace(/{%Description%}/g, product.Description);
    output = output.replace(/{%Id%}/g, product.id);

    if(!product.organic) output = output.replace(/{%Not_Organic%}/g, 'not-organic');

    return output;
};

const tempOverview = fs.readFileSync(`${__dirname}/../1-node-farm/starter/templates/template-overview.html`,"utf-8");
const tempCard = fs.readFileSync(`${__dirname}/../1-node-farm/starter/templates/template-card.html`,"utf-8");
const tempProduct = fs.readFileSync(`${__dirname}/../1-node-farm/starter/templates/template-product.html`,"utf-8");

const data = fs.readFileSync(`${__dirname}/../1-node-farm/starter/dev-data/data.json`,"utf-8");
const dataObject = JSON.parse(data);

const server = http.createServer((req, res) => {
  const pathName = req.url;

  // Overview Page
  if (pathName === "/" || pathName === "/overview") {
    res.writeHead(200, { "Content-type": "text/html" });

    const cardsHtml = dataObject.map(elem => replaceTemplate(tempCard, elem)).join('') ;               // to join the html format from array to single string
    const output = tempOverview.replace('{%Product_Cards%}', cardsHtml);

    res.end(output);
  }
  //Product page
  else if (pathName === "/product") {
    res.end("API page is Visible and accessible");
  }
  // API
  else if (pathName === "/api") {
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
