
//         🔴🔴 3rd Party Module 🔴🔴 

// 3rd party modules are the modules that we use from npm,yarn,etc;
// to use them we simply do the following:
// require the module then save it in a vairable
// and use it: for this example we will use slufigy which is an 3rd party module which is used to change our URL
// from this:  
// http://localhost:8000/product?id=0
// to something like:
// http://localhost:8000/product?fresh-avocado


const slugify  = require('slugify') ;
const fs = require("fs");

const data = fs.readFileSync(
  `${__dirname}/../1-node-farm/starter/dev-data/data.json`,
  "utf-8"
);
const dataObject = JSON.parse(data);

// slugify code
// console.log(slugify('Avocado is my fav', {lower: true}));       // lower = lowercase  output = avocado-is-my-fav
const slugs = dataObject.map(elem => slugify(elem.productName, {lower: true})) ;
console.log(slugs);
//output:
// [
//     'fresh-avocados',
//     'goat-and-sheep-cheese',
//     'apollo-broccoli',
//     'baby-carrots',
//     'sweet-corncobs'
//   ]
