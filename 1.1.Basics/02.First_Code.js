
const hello = 'Hello World';
console.log(hello);

//🔴 Now how do we run this code on terminal or REPL :
// type 'node fileName.js'

// for e.g 
// > node 02.First_Code.js
// > Hello World


//🔴 Remember with Node with can do various thing that we cannot do with Javscript on browser
// like accessing reading file from file system (but how do we do that in Node)
// Any additional functionalitites like accessing file system are stored in a module.
// NodeJs revolve around modules alot.

// 🔸Module in Node. js is a simple or complex functionality organized in single or multiple JavaScript files 
// which can be reused throughout the Node. js application. Each module in Node. js has its own context, 
// so it cannot interfere with other modules or pollute global scope.

//❓How to open or use this module in our code :
// By storing the result in a variable and using 'Require' keyword to asked for a specific file from NodeJs library
// e.g  accessing file system module (fs stands for File system) using this we will get access to reading data and writing data

// Now calling this function here with this built-in FS Module name willl then return an object in which there are lots
// of functions that we can use

const fs = require('fs')           

const textInput = fs.readFileSync('./1-node-farm/starter/txt/input.txt', 'utf-8');
console.log(textInput) ;

//output: 
// The avocado 🥑 is popular in vegetarian cuisine as a substitute for meats in sandwiches and salads because of its high fat content 😄

//🔸To Read = Using Fs module we can now access file using readFileSync (sync = sychronous) method which takes address of file as first argument and type of encoding as second argument
//🔸To Write = We can simply edit the file inside a backtick(``) and then use
// writeFileSync()  which takes 1st argument as path where we want to create a file (see carefully output.txt in the last part of given path) 
// and the data that we want to insert in the new file

const textOut = `This is something I am adding in the existing file about avocado : ${textInput}. \n Created on ${Date.now()}`;
fs.writeFileSync('./1-node-farm/starter/txt/output.txt', textOut);
console.log('File Written');

//🔸Now if we check the path there will be a new file output.txt where we can find 
// This is something I am adding in the existing file about avocado : The avocado 🥑 is popular in vegetarian cuisine as a substitute for meats in sandwiches and salads because of its high fat content 😄. 
// Created on 1701460863259
