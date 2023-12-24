
//🔴 Building a Simple API Project

//❓ But wait what actaully is an API?
// In short for now: An API is a service for which we can request some data,
// In this case the data that the user wants to request is data about the products that we are offering
// in this node farm(file created for this project ctrl+b)
// for this project we have some json data in 1.node-farm > starter > dev-data > data.json

//❓JSON: JSON is a very simple text format that looks very similar to javscript object:
// we have an array which contains 5 objects in this data.json file, and each object contains
// some data in key and value pair , each key must be a string

// So this json file data here is what out API will send to the client when requested.

//🔴LEts create: Ayschronous way to get json data and show it on browser

// const http = require('http');
// const url = require('url');
// const fs = require('fs') ;


// const server = http.createServer((req, res) => {
//     const pathName = req.url;

//     if(pathName === '/' || pathName === '/overview'){
//         res.end("You are at OVERVIEW Page");
//     }
//     else if(pathName === '/api'){

//         fs.readFile(`${__dirname}/../1-node-farm/starter/dev-data/data.json`,'utf-8',  (err, data) => {
//           const productData =  JSON.parse(data);
//           res.writeHead(200, {'Content-type': 'application/json'})
//           res.end(data);
//         });   
//     }
//     else if(pathName === '/product'){
//         res.end("API page is Visible and accessible")
//     }
//     else{
//         res.writeHead(404, {
//             'Content-type': 'text/html',
//             'my-own-header': 'Hello Paaji bhangda paalo'
//         });
//         res.end("<h1>Page Not Found..</h1>") ;
//     }
// });

// server.listen(8000, '127.0.0.1', () => {
//     console.log("I am working Fit and Fine on port no. 8000 ");
// });


//🔸fs.readFile('../1-node-farm/starter/dev-data/data.json') 
//  we can use above method to locate the directory in which our data.json is located 
// there is a better way sometimes (.) could mean somthing else so we use
// dirname to locate the file in the folder 

//🔸NOTE: require() function is an exeption for this rul
//  but usually the (.) dot is where script is running
//  and __dirname is where the current file is located

//🔸 Now to access the data in data.json
// remember the data is in JSON format so we need to convert it into something
// that javscript can understand for that javascript has something built-in
// which is called JSON.parse, this will automatically then turn json data into javscript
// a javscript object of array in this case

//🔸we use res.writehead() => to let server know we are sending data in form of string (or json)
// with status code 200 means successful .
// 404 status code in HTTP indicates that the requested resource could not be found on the server.


//🔸efficient way to optimised above code : so the data is read once and send back anytime 
// the user request it: 
// 🔴 synchronous way to handle the json data

const http = require("http");
const url = require("url");
const fs = require("fs");

const data = fs.readFileSync(`${__dirname}/../1-node-farm/starter/dev-data/data.json`,"utf-8");
const dataObject = JSON.parse(data);

const server = http.createServer((req, res) => {
  const pathName = req.url;

  if (pathName === "/" || pathName === "/overview") {
    res.end("You are at OVERVIEW Page");
  } 
  else if (pathName === "/api") {
    res.writeHead(200, { "Content-type": "application/json" });
    res.end(data);
  }
   else if (pathName === "/product") {
    res.end("API page is Visible and accessible");
  } 
  else {
    res.writeHead(404, {
      "Content-type": "text/html",
      "my-own-header": "Hello Paaji bhangda paalo",
    });
    res.end("<h1>Page Not Found..</h1>");
  }
});

server.listen(8000, '127.0.0.1', () => {
    console.log("I am working Fit and Fine on port no. 8000 ");
});

//🔸still works like cheesee 


//🔴output: in Browser
// [
//     {
//     "id": 0,
//     "productName": "Fresh Avocados",
//     "image": "🥑",
//     "from": "Spain",
//     "nutrients": "Vitamin B, Vitamin K",
//     "quantity": "4 🥑",
//     "price": "6.50",
//     "organic": true,
//     "description": "A ripe avocado yields to gentle pressure when held in the palm of the hand and squeezed. The fruit is not sweet, but distinctly and subtly flavored, with smooth texture. The avocado is popular in vegetarian cuisine as a substitute for meats in sandwiches and salads because of its high fat content. Generally, avocado is served raw, though some cultivars, including the common 'Hass', can be cooked for a short time without becoming bitter. It is used as the base for the Mexican dip known as guacamole, as well as a spread on corn tortillas or toast, served with spices."
//     },
//     {
//     "id": 1,
//     "productName": "Goat and Sheep Cheese",
//     "image": "🧀",
//     "from": "Portugal",
//     "nutrients": "Vitamin A, Calcium",
//     "quantity": "250g",
//     "price": "5.00",
//     "organic": false,
//     "description": "Creamy and distinct in flavor, goat cheese is a dairy product enjoyed around the world. Goat cheese comes in a wide variety of flavors and textures, from soft and spreadable fresh cheese to salty, crumbly aged cheese. Although it’s made using the same coagulation and separation process as cheese made from cow’s milk, goat cheese differs in nutrient content."
//     },
//     {
//     "id": 2,
//     "productName": "Apollo Broccoli",
//     "image": "🥦",
//     "from": "Portugal",
//     "nutrients": "Vitamin C, Vitamin K",
//     "quantity": "3 🥦",
//     "price": "5.50",
//     "organic": true,
//     "description": "Broccoli is known to be a hearty and tasty vegetable which is rich in dozens of nutrients. It is said to pack the most nutritional punch of any vegetable. When we think about green vegetables to include in our diet, broccoli is one of the foremost veggies to come to our mind. Broccoli is a cruciferous vegetable and part of the cabbage family, which includes vegetables such as Brussel sprouts and kale. Although the tastes are different, broccoli and these other vegetables are from the same family."
//     },
//     {
//     "id": 3,
//     "productName": "Baby Carrots",
//     "image": "🥕",
//     "from": "France",
//     "nutrients": "Vitamin A, Vitamin K",
//     "quantity": "20 🥕",
//     "price": "3.00",
//     "organic": true,
//     "description": "The carrot is a root vegetable that is often claimed to be the perfect health food. It is crunchy, tasty and highly nutritious. Carrots are a particularly good source of beta-carotene, fiber, vitamin K, potassium and antioxidants. Carrots have a number of health benefits. They are a weight loss friendly food and have been linked to lower cholesterol levels and improved eye health."
//     },
//     {
//     "id": 4,
//     "productName": "Sweet Corncobs",
//     "image": "🌽",
//     "from": "Germany",
//     "nutrients": "Vitamin C, Magnesium",
//     "quantity": "2 🌽",
//     "price": "2.00",
//     "organic": false,
//     "description": "Also known as maize, corn is one of the most popular cereal grains in the world. Popcorn and sweet corn are commonly eaten varieties, but refined corn products are also widely consumed, frequently as ingredients in foods. These include tortillas, tortilla chips, polenta, cornmeal, corn flour, corn syrup, and corn oil. Whole-grain corn is as healthy as any cereal grain, rich in fiber and many vitamins, minerals, and antioxidants."
//     }
//     ]
