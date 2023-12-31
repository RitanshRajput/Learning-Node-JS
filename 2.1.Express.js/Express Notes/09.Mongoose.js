// 🔴🔴 Mongoose 🔴🔴

// SO we connected our application with the database using mongoose
// So what actually is mongoose ?
//🔸 mongoose is an object data modeling library for mongoDB and NOdeJS
//    Providing a higher level of abstractions. so its a bit like a relationship
//    between Express and Node, So express is a layer of abstraction over regular Node
//    while mongoose is a layer of abstraction over the regular mongoDB driver.

//🔸 An object data modeling library is just a way for us to write Javascript code
//   that will then interact with a database.
//   So we could just use a regular mongoDB driver to access our database and it would work just fine.
//   but instead we use mongoose because it gives us a lot more functionality out of the
//   box allowing for faster and simpler development of our applications.

//🔸 So some of the features Mongoose gives us are:
//🔘 Schemas : to model our data and relationship, easy data validation
//             , simple query API, middleware, and much more.

//🔸 In Mongoose, a schema is where we model our data, so where we describe
//   the structure of the data, default value and validation, we then take that
//   schema and create a model out of it.
//🔸 In Mongoose a model is a wrapper around the schema which allows us to actually
//   interface with the database in order to CREATE, DELETE, UPDATE, READ documents.

//🔸So mongoose is all about model and a model is like a blueprint that we use to
// create documents so its a bit like classes in Javascript, which we also kind of
// use as blueprint in order to create objects out of them,
//🔸so again we create a model in mongoose in order to create documents using it
// and also to query, update and delete these documents, so basically to perform each
// of the CRUD operations create, read, update and delete.
//🔸we need a mongoose model and  in order to create a model we actually need a schema.
//  so we actually create models out of mongoose schema just like we learned before.(09.mongoose.js)
// and we use schema to describe our data to set default values to validate the data and all kinds of stuff like that.

//🔸Implementing a simple schema and model for our applications and later will move it to different file.
//   Below is the very simple representation of schema created for tours.
// const tourSchema = new mongoose.Schema({
//   name: String,
//   rating: Number,
//   price: Number
// })

//🔸 taking one step further:
//🔸new mongoose.Schema({}) = we use this to specify a schema for our data so
// basically describing it and also doing some validation for example required: [true, 'A tour must have a name'],
// the required: we use is something called a Validator, bcoz its use to validate our data
// in this case to simply validate if the name is actually there or the price is there or not

//🔸There are lotof validator in mongoose and we can also create our own

//🔸 {type: String, required: true},  this object here is schema type options and they
// can be different for different types for example the number type has some different
// schema options than the string here but many of them are also similar.
//🔸required: [true, 'A tour must have a name'], here we are sending a error message using array
//🔸{ type: Number, default: 4.5}, here we are defining a default values
const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A tour must have a name'],
    unique: true,
  },
  rating: {
    type: Number,
    default: 4.5,
  },
  price: {
    type: Number,
    required: [true, 'A tour must have a price'],
  },
});

//🔸Above we created a schema and now its time to create a model
// It is a convention to define a model name first letter to be CAPITAL
// just so we know we are dealing with a model
const Tour = mongoose.model('Tour', tourSchema);

//🔸We will create a new document created out of the tour model that we created above
// so this is a new tour document that we created out of our Tour model or function constructors.
//
const testTour = new Tour({
  name: 'The Forest Hike',
  rating: 4.7,
  price: 497,
});

//🔸The below method will save the above data into the tours collection in the
// database, its really is as simple as that,
// So again we have our doc instance which is testTour and on there we can then call
// the save method in order to save the document to the database.

// now this .save() here will return a promise that we can then consume.
// so the return promise contains the document that was just save to the database
// so on the other hand saving this doc into the database might also go wrong
// so we use catch method to catch the error
testTour
  .save()
  .then((doc) => {
    console.log(doc);
  })
  .catch((err) => {
    console.log('🔴ERRORR :', err);
  });
//output:
// DB connection successfull
// {
//   rating: 4.7,
//   _id: 658fff9d10463d341c9e9190,
//   name: 'The Forest Hiker',
//   price: 497,
//   __v: 0
// }
//🔸Now if we try to save it again it gives error,
// because in our schema we set Unique: true property
// 🔴ERRORR : MongoError: E11000 duplicate key error collection: natours.
// tours index: name_1 dup key: { name: "The Forest Hiker" }

//🔸 Lets check something else
// const testTour = new Tour({
//   name: 'The Park Camper',
// });

// testTour
//   .save()
//   .then((doc) => {
//     console.log(doc);
//   })
//   .catch((err) => {
//     console.log('🔴ERRORR :', err);
//   });
//output:
// 🔴ERRORR : Error: Tour validation failed: price: A tour must have a price

//🔸lets check with something which is not set to required
// const testTour = new Tour({
//   name: 'The Park Camper',
//   price: 997,
// });

// testTour
//   .save()
//   .then((doc) => {
//     console.log(doc);
//   })
//   .catch((err) => {
//     console.log('🔴ERRORR :', err);
//   });
//output:
// DB connection successfull
// {
//🔸 rating: 4.5,                // because we set it as default value
//   _id: 6590016154177e0b14dcce7e,
//   name: 'The Park Camper',
//   price: 997,
//   __v: 0
// }
