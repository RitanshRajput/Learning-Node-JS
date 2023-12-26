//          //🔴🔴 Intro to Mongo DB 🔴🔴

//🔸So mongoDB is obviously a Database and its a so called NoSql database
// Now the other type of database which is sort of more traditional, is the
// Relational Database which NoSQL is often compared to.

//🔸In Mongo each database can contain one or more collections, if you are
//  actually coming from one of these more traditional relational database system
//  you can think of a collection as a table of data.
//🔸Then each collection can contain one or more data structure called documents.
//  and again in a relational database a document would be a row in a table
//  so each document contains the data about one single entity, for example 1 blog post or 1 user or 1 reveiew

//🔸Now the collection is like the parent structure that contains all these entities,
//  for example, a blog collection for all posts, a users collection or a review collection.
//  and you can also see that the document has a data format that looks a lot like json.
//  which will make our work a lot easier, when we satrt dealing with these documents.

//🔴 Main features or MongoDB :
// So according to MongoDB's website,
//🔸MongoDB is a document database with the scalibility and flexibility that you want
//   with the querying and indexing that you need.

//  So as we saw befire MongoDB is a document-based database
//🔘Document based : mongoDB stores data in documents which are field-value pair data structures like JSON.
//                   So again it stores data in these documents instead of rows in a table like in traditional relational database.
//                   Its therfore a NoSQL database.
//🔘Scalibility    : Also MongoDB has a built-in scalibility making it very easy to distribute data across multiple machines
//                   as you apps get more and more users and starts generating a ton of data. so whatever yo do MongoDB will make
//                   it very easy for you to grow.
//🔘Flexibility    : Another great feature of mongoDB is flexibility, so therse is no need to define a documents
//                   data schema before filling it with data, meaning that each document can have a different number and type of fields.
//                   and we can also change these fields all the time. and all these is really inline with some real-world business situations.
//                   and therefore can become pretty useful.
//🔘Performant     : MongoDb is also a very Performant database system thanks to feature like Embedded Data Models, Indexing, Sharding, the flexible
//                   documents that we already talked about, native duplication, and so muchmore.
//🔘MongoDB is an Free and Open-source database published under the SSPL License.

// So in summary we can say that mongoDB is a great database system to built scalable, modern and flexible web applications.
// and infact mongo is probably the most used database with NODEJS and so its a perfect fit for us to use in this learning jouney.

//🔴Document structure :

//🔘Document database structure:
// {
//     "_id": ObjectID('34973869832648'),
//     "title": "Randome cars and mogo",
//     "author": "randome name",
//     "length": 3289,
//     "published": true,
//     "tags": ["MongoDB", "space", "ev"],
//     "comments": [
//         {"author" ; "ritanhs", "text": "Interesting stuff"},
//         {"author" ; "ritanhs", "text": "Interesting stuff"},
//         {"author" ; "ritanhs", "text": "Interesting stuff"},
//     ]
// }

//🔸The above could be a very simple representation of a single post document.
// Now just for the sake of comparison. below is how that exact same data could look like
// as a row in a relational database in my sql or even in excel spreadsheet.

//🔘Realtional database structure:
// [id  | title   | author    | length  | published | tags  | comments]
// [1   | Rockets | ELon musk |  3289   |  TRUE     |  --   |  --     ]

//🔸SO mongoDB uses a data format similar to JSON for data storage called BSON.
//  it looks basically the same as JSON, but its typed meaning all the values will have
//  a data type such as string, boolean, date and integer, double, object or more.
//  so it means all mongoDB doc will we typed.

//🔘BSON (binary encoded Javascript Object Notation):
//  data format mongoDB uses for data storage like JSON but typed, so mongoDB doc are typed.
// (binary encoded JSON)This means that BSON is compact for transmitting over a network.
//  while JSON is human-readable and easier to work with in various contexts.

//🔸Just like JSON this BSON doc will always have these key-value pairs.
//   on the other hand in a relational DB each field is called a column.

//🔘Embedding/ De-normalising : Including related data into a single document. this allows for a quciker
//  access and easier data models (its not always the best solution though).
//  for example: in above document data structure we have included comments in the Blog documents because they are related.

//🔸Normalising : The Opposite of embedding/de-normalising is Normalising and thats how the data is always modeled
//  in relational databases. so in that case its not possible to embed data and so the solution is to create
//  a whole new table for the documents for the comments and then JOIN the tabled by Refrencing to the ID field
//  the comments table.

//🔴Important about BSON Documents :
//🔸The Maximum size for each document is currently 16MB but this might increase in the future.
//🔸Each document contains a unique ID, which acts as a primary key of that document. it automatically
//  generated with the object ID data type each time there is a new document, so we dont have to worry about it.
