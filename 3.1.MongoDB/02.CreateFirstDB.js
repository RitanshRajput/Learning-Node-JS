///🔴creating first MONGODB database

// process :
// install
// set environment variables
// Command changed in the new versions of mongo
// mongodb --version // to check version of mongo
// mongosh  // to starting the shell.
//🔘1. Open powershell or command prompt > type mongosh (mongo shell will launch)

//🔴commands : for query
//🔸use (document name) = it is use to go to the database or also used to switch on a already existing database
//          but if we try to go to the database that doesn't exist it will create a one with the given name.

// test > use natours-test           // this command we type (test is default db we are in)
// switched to db natours-test       // output message we get
// natours-test >                    // and now we are switched to natour-test db from test

// Now this blank database is ready to recieve some data, now remember that inside a database
// we have collections and then each collections has documents in it. and the data that we create
// in the Mongo Shell is always documents, and offcourse we have to create document inside of a collection and
// so we specify that collection before we insert a document and this works like this.

//🔸 db.(nameOfCollection).insertOne()

// natours-test > db.tours.insertOne({ name : "The Forest Hiker", price: 297, rating: 4.7})
// {
//   acknowledged: true,
//   insertedId: ObjectId("658aee67afed284bc51e3cbc")
// }

// so db which stands for current database in this case natours-test and then we specify the name of collection
// which is tours and then on that we use the insertMany function.
// Databse is the currenlty used database that is right now active and we want to insert a document
// into it we need to specify the collection where that document is gonna live and we do that
// by using dot (.) and the name of the collection which is in this case "tours".
// so right now this collection is hasn't been created and so it will create it once we run this command.
// and later on we will then have a collection for users, or for reviews so basically for all the resources
// that we created in the last section.

// So using tours here is because that is one of our resources in our application.
// we will learn about data modeling a bit later in the course.
// Lets now actually insert a document into this database collection and its actually very simple
// remember that MongoDB uses BSON which is quite similar to JSON and so we can simply
// pass a jaavscript object into this insertOne() function and it will then convert it into JSON and BSON.

//🔘So we use insertMany() to create multiple documents and
//  we use insertOne() when we just wanna create one.

//  Now to check whether we have created a document or not.
//🔸 db.tours.find()

// natours-test > db.tours.find()
// [
//   {
//     _id: ObjectId("658aee67afed284bc51e3cbc"),
//     name: 'The Forest Hiker',
//     price: 297,
//     rating: 4.7
//   }
// ]

// And here indeed is the document we just created and notice how it also automatically created
// this ObjectID here which is the unique identifier of this document.

//🔸 show dbs

// natours-test > show dbs
// FirstMongoDBServer  72.00 KiB
// admin               40.00 KiB
// config              72.00 KiB
// local               88.00 KiB
// natours-test        40.00 KiB

// Now another very useful command is show dbs which will basically show us all the database
// that we have in MongoDB, so here atlast we can see our created natours-test database and we also
// have that mongoDB created for us.

//🔸 use databaseName

// natours-test > use admin
// switched to db admin

// we can use to switch to one of above database, now we have switched to admin, so
// again use is to switch to an existing database or to create a new one, if the name
// we pass into it does not yet exist.

//🔸show collections

// natours-test > show collections
// tours

// here we can the tours collection that we created before, remember back there when
// we created the document (db.tours.insertOne({})) we also created the tours collection
// because every document always has to be inside of a collection.
// So this are the basic command in mongoDB we will learn more as we keep learning more about
// MongoDB

//🔸 quit()

// natours-test > quit()
// C:\Users\Ritansh Rajput>

// This command is use to quit the mongoSHell
