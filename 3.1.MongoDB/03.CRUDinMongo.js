//
//   🔴🔴  CRUD operations in MONGODB 🔴🔴

// Before proceeding further we must be wondering why we do all this stuff on terminal
// and not on vscode as we have done so far and how  does this relates to our express application.
// that we built in the last section in the Natour-app.

// The answer for that is that right now I want you to learn the absolute fundamentals of mongoDB
// without the context of any application completely outside the NodeJs. because
// in theory we could use MongoDB with any other language or any other framework it
// doesnt have to be NodeJs. so its actually good for us to leearn MongoDB standing completely on its own
// without the context of any other language.

// and later on will connect a mongoDB database with our application. so in the next section
// we can then actually start working with database. inside our express applicaiton
// and by then we will use a MongoDB driver just for Node Express so we can use more Javscript
// language to interact with our MongoDB database.

//                        🔴 Create Operation :🔴

// So in the lastTime we created a new database a new collection inside called Tours.
// and then one new document in there, and to do that we used insertOne().
// But now lets actually create two documents at the same time. so that works like this.

//🔸 db.collectionName.insertMany([{},{}])

// natours-test > db.tours.insertMany([{ name: "The Sea Explorer", price:497, rating: 4.8},{ name: "The Snow Adventurer", price: 997, rating: 4.9, difficulty: "easy"}])
// {
//   acknowledged: true,
//   insertedIds: {
//     '0': ObjectId("658af7360a5bf107cfd1f271"),
//     '1': ObjectId("658af7360a5bf107cfd1f272")
//   }
// }

// db we is again the database then .tours which is the collection where we wawnt to
// to add our new documents and then .insertMany() and insertMany is gonna accept an array of multiple
// objects. and inside that array we put 2 object using curly braces  .insertMany([{},{}]) just like this.
// and then all we have to do is fill up the empty objects.

// Also as we already discuss that MongoDB is very flexible as all the object doesn't have to be same structure
// so we can add more key-value in different object. as we can see above.
// Also we can see that the ID's are autogenerated for each document.

//🔸 db.tours.find()

// natours-test > db.tours.find()
// [
//   {
//     _id: ObjectId("658aee67afed284bc51e3cbc"),
//     name: 'The Forest Hiker',
//     price: 297,
//     rating: 4.7
//   },
//   {
//     _id: ObjectId("658af7360a5bf107cfd1f271"),
//     name: 'The Sea Explorer',
//     price: 497,
//     rating: 4.8
//   },
//   {
//     _id: ObjectId("658af7360a5bf107cfd1f272"),
//     name: 'The Snow Adventurer',
//     price: 997,
//     rating: 4.9,
//     difficulty: 'easy'
//   }
// ]

// Just to make sure it is created we check that usign above command. so here indeed we have
// our 2 document with 1 from the last lecture. where we created our first DB.

//       🔴 Querying (Reading) Documents

//🔸Querying for data in a database is one of the most important operations that we have
// in databases. so lets now take a look at a couple of query operators in mongoDB starting with
// the simple ones and then moving on to some really complex queries.

// The easiest way to basically query for all the document in a certain collection is to
// to just use find() without passing anything in there. so thats what we were doing until
// this point and so it gives us result with all the documents that are in a certain collection
// basically without any searching criteria.

//🔸 db.collectionName.find()

// But Now lets say that we actually only want one tour and we already know its name
// so we can search for that tour using the name that we know and so, we use the following
// command but this time we're gonna pass in a filter object, so again we need an object in
// here and so you start to see now that in mongoDB really everything works with object
// so inside this object we pass in the filter, basically the search criteria that we want to search for.
// we simply set the name to the tourName that we want to search for and thats it. so that is our search criteria
// for this search filter and now we get that document.

//🔸 db.tours.find({search criteria})

// natours-test > db.tours.find({ name: "The Forest Hiker"})
// [
//   {
//     _id: ObjectId("658aee67afed284bc51e3cbc"),
//     name: 'The Forest Hiker',
//     price: 297,
//     rating: 4.7
//   }
// ]

// we can use this to search something else as well like say for we want a document with difficulty easy.

// natours-test > db.tours.find({ difficulty : "easy"})
// [
//   {
//     _id: ObjectId("658af7360a5bf107cfd1f272"),
//     name: 'The Snow Adventurer',
//     price: 997,
//     rating: 4.9,
//     difficulty: 'easy'
//   }
// ]

//🔸Now lets take it a bit next level, now we want to search document with price less than 500
//  lets see some advance query operator. lte stands for less than equal operator

//🔸$lte = less than equal to
//🔸$lt  = less than
//🔸 db.tours.find({ price: {$lte: 500}})

// natours-test> db.tours.find({ price: {$lte: 500}})
// [
//   {
//     _id: ObjectId("658aee67afed284bc51e3cbc"),
//     name: 'The Forest Hiker',
//     price: 297,
//     rating: 4.7
//   },
//   {
//     _id: ObjectId("658af7360a5bf107cfd1f271"),
//     name: 'The Sea Explorer',
//     price: 497,
//     rating: 4.8
//   }
// ]

// Now this looks very weird but this is how we use query operator in mongoDB.
// Now here it say search document where price is less than equal 500.
// also this ($) is special sign that is reserved in mongoDB for its operators.
// so whenever we see this dollar sign here in mongoDB, we know its a mongo operator.

//🔸lets search for two search criteria at the same time, so what I want to do next is to
//  search for documents less or equal to 500 but also the rating greater or equal to 4.8

//🔸 $gte = greater than equal to
//🔸 $gt = greater than
//🔸 db.tours.find({ criteria1, criteria2 })

// natours-test > db.tours.find({ price: {$lte: 500}, rating:{$gte:4.8} })
// [
//   {
//     _id: ObjectId("658af7360a5bf107cfd1f271"),
//     name: 'The Sea Explorer',
//     price: 497,
//     rating: 4.8
//   }
// ]

// So we get the result as we expected above is the only document which meets both the criteria we mentioned.

//🔸 Lets take it further and see OR operator in mongoDB.
// SO Or query checks 2 condition and return the document based on whichever is true.
// it takes an array inside we define our 2 condition.

//🔸 db.tours.find({ $or: [{ price: {$lte: 500}}, {rating: {$gte: 4.8}} ] })

// natours-test> db.tours.find({ $or:[ {price: {$lte: 500}}, {rating:{$gte:4.8}} ] })
// [
//   {
//     _id: ObjectId("658aee67afed284bc51e3cbc"),
//     name: 'The Forest Hiker',
//     price: 297,
//     rating: 4.7
//   },
//   {
//     _id: ObjectId("658af7360a5bf107cfd1f271"),
//     name: 'The Sea Explorer',
//     price: 497,
//     rating: 4.8
//   },
//   {
//     _id: ObjectId("658af7360a5bf107cfd1f272"),
//     name: 'The Snow Adventurer',
//     price: 997,
//     rating: 4.9,
//     difficulty: 'easy'
//   }
// ]

// all of the above documents fullfill our given OR criteria.
// To recap here we start with the OR operator and the OR operator accepts an array
// of condition so thats why we then create this array here and this array will then
// contain one object for each of our filters basically. so want either of this to be true.

// lets make some changes in the OR operator to see different results

// 🔸 db.tours.find({ $or:[ {price: {$gt: 500}}, {rating:{$gte:4.8}} ] })

// natours-test> db.tours.find({ $or:[ {price: {$gt: 500}}, {rating:{$gte:4.8}} ] })
// [
//   {
//     _id: ObjectId("658af7360a5bf107cfd1f271"),
//     name: 'The Sea Explorer',
//     price: 497,
//     rating: 4.8
//   },
//   {
//     _id: ObjectId("658af7360a5bf107cfd1f272"),
//     name: 'The Snow Adventurer',
//     price: 997,
//     rating: 4.9,
//     difficulty: 'easy'
//   }
// ]

//🔸One more thing that besides our filter object, so this one { $or:[ {price: {$gt: 500}}, {rating:{$gte:4.8}} ] }
// we can also pass in an object for projection.
// SO what projection means is that we simply want to select some of the fields in the output
// It is very simple all we have to do is for example: say name equals to one.
// so {name: 1} means that we only want the name to be in the output and so that's why
// we set name to one. all the others properties are not gonna appear in this case.

//🔸db.tours.find({ $or: [{Or criteria1}, {Or criteria2}] }, {projection})

// natours-test> db.tours.find({ $or:[ {price: {$gt: 500}}, {rating:{$gte:4.8}} ] }, {name:1})
// [
//   {
//     _id: ObjectId("658af7360a5bf107cfd1f271"),
//     name: 'The Sea Explorer'
//   },
//   {
//     _id: ObjectId("658af7360a5bf107cfd1f272"),
//     name: 'The Snow Adventurer'
//   }
// ]

// Indeed we have the name and no longer all these other properties
