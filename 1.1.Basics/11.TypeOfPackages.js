
//🔸          🔴 NPM and Types of Packages

//❓ NPM : npm is a package manager for the JavaScript programming language maintained by npm, Inc. npm is the default package manager for the JavaScript runtime environment Node.js and is included as a recommended feature in the Node.js installer.[4]

// It consists of a command line client, also called npm, and an online database of public and paid-for private packages, called the npm registry. The registry is accessed via the client, and the available packages can be browsed and searched via the npm website. The package manager and the registry are managed by npm, Inc.


//🔸 lets initialise NPM in NodeJs
// command: (npm init)

//output: after setting up 
// new file package.json is created
// {
//     "name": "learning-npm",
//     "version": "1.0.0",
//     "description": "learning node.js and npm",
//     "main": "01.Introduction.js",
//     "scripts": {
//       "test": "echo \"Error: no test specified\" && exit 1"
//     },
//     "author": "Ritansh Singh",
//     "license": "ISC"
//   }
  

//🔴 type of packages :
// So the two type of packages that we can install are
// 1. Simple dependencies / (regular dependencies)
// 2. development dependencies


//🔸 Simple dependencies / (regular dependencies) :
// this packages are simply packages that contain some code that we will include our own code so code upon which we build our own application and thats why we actually call them dependencies because our projects in our code depends on them to work correctly.
// for example: express which is again node framework that is a dependency
// lets install first package called slugify which is the small tool that we can use to make more readable URLs out  of names for examples like product names in the case of our nodefarm example 

//❓how to install a regualr dependency package in npm: 
// command:  (npm install packageName)        
// ex:  npm install slugify

// 🔸package.json:
// "dependencies": {
//     "slugify": "^1.6.6"
//   },

// In old version we also needed to --save after the package name not in latest version it is not really necessary.
// now it will install this package as a regular dependencies , and also update the package.json file


//🔴development dependencies: 
// so beside regualar depend.. we have development dependencies and this are just tools for development for example like code bundler, webpack, debugger tools, or a testing library.

// so this dependencies are not needed for production so our code does not really depend on them we simply use them to develop our applications

//❓ how to install a dev dependencies: 
// command : npm install nodemon --save-dev

//🔸package.json:
// "devDependencies": {
//     "nodemon": "^3.0.2"
//   }

// To specify that this is a development dependency we use --save-dev this will add an entry to the package.json in the dev dependencies

//🔸Nodemon: this is a really nice development tool that helps us develop node.js app by automatically restarting the node application whenever we change some file in the working directory.


//🔴 How to install a package or dependency Globally:

// above we install some dependency like slugify and nodemon they are install locally means they are only accessible in the local folder(Basics) to use some file globally lets see how to install them

//🔸installing nodemon globally:
// command :  npm i nodemon --global

// here --global means install this file in my local machine so that i can use it anywhere in my computer and i basically a shorthand for install


//❓How to run nodemon :
// command: nodemon fileName.js

// Now it will watch every file with every extension and after this all we have to do is save the changes and it will automatically restart the server

//🔸 Works perfect also we dont have to specify our file name everytime we try to run it, we can use a shortcut
// command : nodemon 10(press tab)
// output:  nodemon 10.OwnModules.js
// this will automatically takes the file name



//❓ How to run a global dependency in our local directory 
// well to do that we can go to the package.json file and in that 
// scripts object

// for example we want to use nodemon which is globally install in our pc now we will go to the script object and update the test string there like this:
// script: {
//     "start": "nodemon 11.TypeOfPackages.js",
// }

//🔸heres the good part: now rather than runnning nodemon 11.TypeOfPackages.js everytime in the command line we can simply do  this:
// command:  (npm run start)

// this will work like nodemon 11.TypesOfPackages.js as we assign it in script , start is just a special word used in development and also rather than using npm run start, we can run the same thing using npm start will do the same thing

