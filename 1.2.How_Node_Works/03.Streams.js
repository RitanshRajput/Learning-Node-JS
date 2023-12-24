//🔴🔴 Streams in NodeJS

//🔸 Streams used to process (Read and Write) data piece by piece (chunks)
// without completing the whole read or write operation, and therefore without
// keeping all the data in memory.

// streams are instances of the EventEmitter class

//🔸advanatges:
//1. perfect for handling large volumes of data for example videos
//2. More efficient data processing in terms of memory (no need to keep all the data
//    in memory) and time(we dont have to wait until all the data is available).
//
//
//
//🔴Fundamentals types of Streams:
//🔘1. Readable Streams :
//🔸streams from which we can read (consume) data
//  ex: https requests, fs read streams
//🔸imp events: data , end
//🔸imp function: pipe(), read()

//🔘2. Writable Streams :
//🔸streams from which we can write data
//  ex: https resonses, fs write streams
//🔸imp events: drain, finish
//🔸imp function: write(), end()

//🔘3. Duplex Streams :
//🔸streams that are both readable and writable
//  ex: web socket (net module)

//🔘4. Transform Streams :
//🔸 Duplex streams that transfrom data as it is written or read
//  ex: zlib Gzip creation
//
//
//

//❓How to get a large file from the file system and then send it to client.

//🔴way 1:
// const fs = require("fs");
// const server = require("http").createServer(); //create a new server

// //create a event
// server.on("request", (req, res) => {
//   fs.readFile("test-file.txt", (err, data) => {
//     if (err) console.log(err);

//     res.end(data);
//   });
// });

// server.listen(8000, "127.0.0.1", () => {
//   console.log("Listening on Port 8000");
// });
//🔸Problem: In the above code node will have to load the entire file in the memory because if file is ready it can then send that data.
//
//
//

//🔴way 2: using streams
// const fs = require("fs");
// const server = require("http").createServer(); //create a new server

// //create a event
// server.on("request", (req, res) => {
//   const readable = fs.createReadStream("test-file.txt");
//   // this now create a stream from data that is in this text file which we can then
//   // consume piece by piece so chunk by chunk

//   readable.on("data", (chunk) => {
//     res.write(chunk);
//   });
//   // so each time there is a new piece of data that we can consume , a readable stream emits the
//   // data event so we can listen to that

//   readable.on("end", () => {
//     res.end();
//   });
//   //so when stream is just finished reading the data from the file, the end event will be emitted
//   // and as soon as that happens we will do res.end

//   readable.on("error", (err) => {
//     console.log(err);
//     res.statusCode = 500; //server error status code 500
//     res.end("File Not Found");
//   });
//   //another thing that we can read is error event
// });

// server.listen(8000, "127.0.0.1", () => {
//   console.log("Listening on Port 8000");
// });
//🔸The idea here is that we actually dont really need to read this data from the file into a
//   variable, right? we dont need this variable (i.e: res) , so instead of reading the data into a
//   variable and having to store that variable, into the memory we will just create a readable stream
// Then as we recieve each chunk of data we send it to the client as a response
// which is a writable stream

//❓problem with above approach is that our readable stream so the one that were usnign to read
// the file from the dist is much much faster than actually sending the result with the response
// writable stream over the network and this will overwhelm the response stream which cannot handle
// all this incoming data so fast, and this problem is called backPressure.

// SO in case backPressure happens when the response cannot send the data nearly as fast as it is receiving it
// from the file
//
//
//

//🔴way 3: tackling backPressure
const fs = require("fs");
const server = require("http").createServer(); //create a new server

//create a event
server.on("request", (req, res) => {
  const readable = fs.createReadStream("test-file.txt");
  readable.pipe(res);
  // readableSource.pipe(writableDestination)
  // so here we need a readableSource then we can use the pipe on it and here will have to put a writable destination
  // so this is where our data comes from (readable) and it has to be a readable stream and that data we can
  // then pipe into a writable destination( .pipe(res) ) in this case our destination is the response
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening on Port 8000");
});

//🔸solution is to use pipe operator, so the pipe operator is available on all readable streams
// and it allows us to pipe the output of a readable stream right into the input of a writable stream
// and that will then fix the problem of backpressure, because it will automatically handle the speed
// od the data comming in and the speed of the data going out.
