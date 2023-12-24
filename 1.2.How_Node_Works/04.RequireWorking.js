//🔴🔴The Common Module Sytem in NodeJs

//🔸Each JavaScript file is treated as a separate module;
//🔸Node.js uses the CommonJS module system: require(). exports or module.exports;
//🔸ES module system is used in browsers: import/export;
//🔸There have been attempts to bring ES modules to node.js (.mjs).

//🔴🔴 ?What Happend when we require() a Module

//🔸FIrst the path is resolved and the file is located
//🔸Then the process called wrapping happens
//🔸after that the module code is executed
//🔸And the module exports are returned
//🔸and finally the entire module gets cached
//
//
//
//
//
//////////////////////////////////////////////////////
//
//
//
//
//
//🔴🔴 Requiring Modules in practice :

console.log(arguments);
//🔸Output:
// arguments is an javascript array which contains objects which we can see and know that we are actually ina function
// lets see the five arguments of the wrapper function
// 🔸1. export  '0' : {}
// 🔸2. require '1': {require}
// 🔸3. module  '2': {module}
// 🔸4. filename '3' :'C:\\Users\\Ritansh Rajput\\OneDrive\\Desktop\\NodeJS\\3.How_Node_Works\\04.RequireWorking.js',
// 🔸5. directoryname  '4':  'C:\\Users\\Ritansh Rajput\\OneDrive\\Desktop\\NodeJS\\3.How_Node_Works'

// [Arguments] {
//     '0': {},
//     '1': [Function: require] {
//       resolve: [Function: resolve] { paths: [Function: paths] },
//       main: Module {
//         id: '.',
//         path: 'C:\\Users\\Ritansh Rajput\\OneDrive\\Desktop\\NodeJS\\3.How_Node_Works',
//         exports: {},
//         filename: 'C:\\Users\\Ritansh Rajput\\OneDrive\\Desktop\\NodeJS\\3.How_Node_Works\\04.RequireWorking.js',
//         loaded: false,
//         children: [],
//         paths: [Array]
//       },
//       extensions: [Object: null prototype] {
//         '.js': [Function (anonymous)],
//         '.json': [Function (anonymous)],
//         '.node': [Function (anonymous)]
//       },
//       cache: [Object: null prototype] {
//         'C:\\Users\\Ritansh Rajput\\OneDrive\\Desktop\\NodeJS\\3.How_Node_Works\\04.RequireWorking.js': [Module]
//       }
//     },
//     '2': Module {
//       id: '.',
//       path: 'C:\\Users\\Ritansh Rajput\\OneDrive\\Desktop\\NodeJS\\3.How_Node_Works',
//       exports: {},
//       filename: 'C:\\Users\\Ritansh Rajput\\OneDrive\\Desktop\\NodeJS\\3.How_Node_Works\\04.RequireWorking.js',
//       loaded: false,
//       children: [],
//       paths: [
//         'C:\\Users\\Ritansh Rajput\\OneDrive\\Desktop\\NodeJS\\3.How_Node_Works\\node_modules',
//         'C:\\Users\\Ritansh Rajput\\OneDrive\\Desktop\\NodeJS\\node_modules',
//         'C:\\Users\\Ritansh Rajput\\OneDrive\\Desktop\\node_modules',
//         'C:\\Users\\Ritansh Rajput\\OneDrive\\node_modules',
//         'C:\\Users\\Ritansh Rajput\\node_modules',
//         'C:\\Users\\node_modules',
//         'C:\\node_modules'
//       ]
//     },
//     '3': 'C:\\Users\\Ritansh Rajput\\OneDrive\\Desktop\\NodeJS\\3.How_Node_Works\\04.RequireWorking.js',
//     '4': 'C:\\Users\\Ritansh Rajput\\OneDrive\\Desktop\\NodeJS\\3.How_Node_Works'
//   }

//🔴🔴 Module ..another thing in wrapper funtion
console.log(require("module").wrapper);
//🔸output:
// '(function (exports, require, module, __filename, __dirname) { ','\n});'
//
//
//
//
//////////////////////////////////////////////////////
//
//
//
//🔴 Exporting a class calculator from (05.test-module-1.js file) and
// require that class in this file

//🔴🔴 Difference between Module.exports and exports

//🔴 module.exports
const Calc = require("./05.test-module-1");
const calculate1 = new Calc();
console.log(calculate1.add(2, 5));
console.log(calculate1.multiply(2, 5));
//🔸output:
// 7
// 10
//
//
//
//🔴exports
const Calc2 = require("./06.test-module-2");
console.log(Calc2.add(2, 5));
console.log(Calc2.multiply(2, 5));

//🔸output:
// 7
// 10

//🔴Using es6 destructuring in the above exports example
const { add, multiply } = require("./06.test-module-2");
console.log(add(2, 5));
console.log(multiply(2, 5));
//🔸output:
// 7
// 10
//
//
//
//////////////////////////////////////////////////////
//
//
//🔴🔴 Caching
require("./07.test-module-3")();
require("./07.test-module-3")();
require("./07.test-module-3")();

//🔸 output:
// Hello from the module
// log this beautiful text..😂
// log this beautiful text..😂
// log this beautiful text..😂

//🔸so technically this module was only loaded once and so the code inside of it was also executed once only
// and so thats why this line of code here (console.log("Hello from the module");) was only run once
// and the other (console.log("log this beautiful text..😂")) they came from cache so they were stored somewhere
// in the node processor cache, and once we will call the function second times it was then retrieve from there
// instead of loading the module again
