// 🔴🔴 Script to Import all development data at once //

//So we are creating a script here to import all the data from our Json file to
// the Database all at once

//🔸copying code from Server.js

const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Tour = require('../../models/tourModel');

dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log('DB connection successfull'));

//🔸READ JSON FILE
// (so this is an json data so we use json.parse() to convert it into a javascript object)
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/tours-simple.json`, 'utf-8')
);

//🔸IMPORT DATA INTO DATABASE
// this method will read all the data from the JSON file convert it into an array of javascript
// object which we store in tours and then we pass this array into create method
// as create can take an array of data
const importData = async () => {
  try {
    await Tour.create(tours);
    console.log('Data successfully loaded! ');
  } catch (error) {
    console.log(error);
  }
  // this method is use to exit the process after completion of deleteData() function
  // this process.exit() is actually an aggressive way of stopping and application but in this case its no problem
  // we put it outside the try catch because no matter the output it must exit after completion
  process.exit();
};

//🔸DELETE ALL DATA FROM COLLECTION
// deleteMany() mongoose method is when used without passing any argument in it
// deletes every document in the collection
const deleteData = async () => {
  try {
    await Tour.deleteMany();
    console.log('Data successfully Deleted! ');
  } catch (error) {
    console.log(error);
  }
  process.exit();
};

if (process.argv[2] === '--import') {
  importData();
} else if (process.argv[2] === '--delete') {
  deleteData();
}

// console.log(process.argv);

//🔸run this command after enabling above console.log(process.argv):
//  >  node dev-data/data/import-dev-data.js
// output :
// [
//   'A:\\nodejs runtime environment apk\\node.exe',
//   'C:\\Users\\Ritansh Rajput\\OneDrive\\Desktop\\Nodejs\\Learning Node JS\\2.1.Express.js\\Natour_Project\\dev-data\\data\\import-dev-data.js'
// ]

//🔸run this command: node dev-data/data/import-dev-data.js --import
// output :
// [
//   'A:\\nodejs runtime environment apk\\node.exe',
//   'C:\\Users\\Ritansh Rajput\\OneDrive\\Desktop\\Nodejs\\Learning Node JS\\2.1.Express.js\\Natour_Project\\dev-data\\data\\import-dev-data.js',
//   '--import'
// ]

//🔸this --import here we can use this data here in order to write a very simple command
// line application basically which will import the data when we specify this option
// and delete the data when we specify the delete option.
