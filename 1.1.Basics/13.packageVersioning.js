//  🔴🔴  Package Versioning and Updating

// {
//     "name": "learning-npm",
//     "version": "1.0.0",
//     "description": "learning node.js and npm",
//     "main": "01.Introduction.js",
//     "scripts": {
//       "test": "echo \"Error: no test specified\" && exit 1"
//     },
//     "author": "Ritansh Singh",
//     "license": "ISC",
//     "dependencies": {
//       "slugify": "^1.6.6"
//     },
//     "devDependencies": {
//       "nodemon": "^3.0.2"
//     }
//   }

//🔸 In the above package.json file versions are shown in so called semantic notation
// which means there versions numbers are always expressed with this three numbers
// ex:  "nodemon": "^3.0.2"

//🔸The first one is called the Major version ^3
//🔸The second one is called the Minor version .0
//🔸The last one is called the patch version .2

//🔸The patch version :
// It is only intended to fix bugs
// lets say here in ^3.0 the developer found some bugs so after fixing that bug
// the developer released the newer version which is 3.0.1 then they find another bug
// and released the newer version after fixing the bug called 3.0.2 which is the latest version

//🔸Minor version :
// The minor version introduces some new features into the packages, but it does not
// include the breaking changes.  So all the changes that are done in a new version number
// will always be backward-compatible.
//ex; One day nodemon team decide to release version 3.3, well that will then include some
// new features but it will not break our codes

//🔸Major version :
// The major version which is only bumped up when a huge new release which can have breaking changes
// ex: If slugify 2.0.0 comes along then our previous code will no longer work because
// the slugify function that we have here for example might have changed its name or
// maybe the parameter that it expects here are diffferent, etc
// So whenever there is newer version it might affect your code that you already have.

// thats where updating packages are important
//
//
//
//
//       🔴🔴 Updating packagess:

//🔸 SO in our package.json file this small symbol here that comes in front of the
// version number is what specifies which updates we accept for each of the packages,
// so this symbol ^ which npm specifeis here by defualt means that we accept patch and minor releases.

//❓ How do we actually update packages?
// so first we check whether there are any outdated packages
//🔸 command : npm outdated
// this will show us the table that consist of outdated packages

//To check we can use older version of any module
// 🔸conmmand :  npm install slugify@1.0.0
// pakcage.json :

// "dependencies": {
//    "slugify": "^1.0.0"
//  },

//🔸this will install older version of slugify, now if we run npm outdated it will give us:
// package  current    wanted   latest   location               depended by
// slugify  1.0.0      1.6.6    1.6.6   node_modules/slugify    Basics

// so ^1.0.0  means ^ says that we accept all the patch and minor that we have
//🔸 but we can change that: by using (~)   ==  ^~1.0.0
// This will then only accpet patch release
// and if we run npm outdated again it will show the version with only minor version release

//🔸 Now if we update the slugify  using:
// command = npm update slugify      or
// command = npm i slugify@latest

// package.json:
// "dependencies": {
//     "slugify": "^1.6.6"
//   },

//🔸 * includes all the version *1.6.6
// including patch breaking changes,  but thats not a good idea usually
// therfore ^1.6.6 default is safer to use or ~1.6.6 is also safer to use

//  🔴 Unistall a package
// commmand : npm uninstall packageName

//🔸 Node Module: So this folder contains all our dependencies and it contains
// tons of thousands of code, so if in future we want to share our code to somone or
// upload it somewhere like github or dropbox we dont want to share node module file with it
// so before sharing it we should delete node module.

// now how to get back node modules folder:
// command : npm install
