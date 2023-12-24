//  🔴🔴 Event Loop in Actions

// const fs = require("fs");

// setTimeout(() => console.log("Timer 1 finished"), 0);
// setImmediate(() => console.log("immediate 1 finished"));

// fs.readFile("test-file.txt", () => {
//   console.log("I/O finished ");
//   console.log("------------- ");

//   setTimeout(() => console.log("Timer 2 finished"), 0);
//   setTimeout(() => console.log("Timer 3 finished"), 3000);
//   setImmediate(() => console.log("immediate 2 finished"));

//   process.nextTick(() => console.log("Process.nextTick"));
// });

// console.log("hello from the top-level code");

//🔸output:
// hello from the top-level code
// Timer 1 finished
// immediate 1 finished
// I/O finished
// -------------                  // log above this line are not reallly running in event loop, and log after the line are running in the event loop
// Process.nextTick
// immediate 2 finished
// Timer 2 finished
// Timer 3 finished
//
//
//
//

//🔴Single-Thread  (sequence of instruction)

//           Initial Program
//               |
//               v
//           Execute "top-level" code
//               |
//               v
//           Require modules
//               |
//               v
//           Register event callbacks
//               |
//               v
//           Start Event LOOp
//
//
//
//

//      🔴🔴 Thread Pool using cryptography

// const fs = require("fs");
// const crypto = require("crypto");

// const start = Date.now(); // date in millisecond

// setTimeout(() => console.log("Timer 1 finished"), 0);
// setImmediate(() => console.log("immediate 1 finished"));

// fs.readFile("test-file.txt", () => {
//   console.log("I/O finished ");
//   console.log("------------- ");

//   setTimeout(() => console.log("Timer 2 finished"), 0);
//   setTimeout(() => console.log("Timer 3 finished"), 3000);
//   setImmediate(() => console.log("immediate 2 finished"));

//   process.nextTick(() => console.log("Process.nextTick"));

//   crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
//     console.log(Date.now() - start, "Password encrypted");
//   });
// });

// console.log("hello from the top-level code");

// //🔸Output:
// // hello from the top-level code
// // Timer 1 finished
// // immediate 1 finished
// // I/O finished
// // -------------
// // Process.nextTick
// // immediate 2 finished
// // Timer 2 finished
// // 1477 Password encrypted      //1477 almost 1.5 seconds to encrypt this password
// // Timer 3 finished
//
//
//
//🔸 multiple thread working at the same time
// const fs = require("fs");
// const crypto = require("crypto");

// const start = Date.now(); // date in millisecond

// setTimeout(() => console.log("Timer 1 finished"), 0);
// setImmediate(() => console.log("immediate 1 finished"));

// fs.readFile("test-file.txt", () => {
//   console.log("I/O finished ");
//   console.log("------------- ");

//   setTimeout(() => console.log("Timer 2 finished"), 0);
//   setTimeout(() => console.log("Timer 3 finished"), 3000);
//   setImmediate(() => console.log("immediate 2 finished"));

//   process.nextTick(() => console.log("Process.nextTick"));

//   crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
//     console.log(Date.now() - start, "Password encrypted");
//   });
//   crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
//     console.log(Date.now() - start, "Password encrypted");
//   });
//   crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
//     console.log(Date.now() - start, "Password encrypted");
//   });
//   crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
//     console.log(Date.now() - start, "Password encrypted");
//   });
// });

// console.log("hello from the top-level code");

//🔸Output:
// hello from the top-level code
// Timer 1 finished
// immediate 1 finished
// I/O finished
// -------------
// Process.nextTick
// immediate 2 finished
// Timer 2 finished
// 2186 Password encrypted
// 2225 Password encrypted
// 2227 Password encrypted
// 2262 Password encrypted
// Timer 3 finished

//🔴SO as earlier we learn that there are 4 thread doing the work at the same
//  time so thats why this four password encryptions are taking almost same time

//🔸Note: we can actaully change the thread pooll size

//🔴changing thread pool size:

// const fs = require("fs");
// const crypto = require("crypto");

// const start = Date.now();
// process.env.UV_THREADPOOL_SIZE = 1; // ENV = Environment, UV = Libuv
// // now the above command will make only one thread in our thread pool
// // this will cause the encryption code to calculate one after another
// // and not simultaneously anymore

// setTimeout(() => console.log("Timer 1 finished"), 0);
// setImmediate(() => console.log("immediate 1 finished"));

// fs.readFile("test-file.txt", () => {
//   console.log("I/O finished ");
//   console.log("------------- ");

//   setTimeout(() => console.log("Timer 2 finished"), 0);
//   setTimeout(() => console.log("Timer 3 finished"), 3000);
//   setImmediate(() => console.log("immediate 2 finished"));

//   process.nextTick(() => console.log("Process.nextTick"));

//   crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
//     console.log(Date.now() - start, "Password encrypted");
//   });
//   crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
//     console.log(Date.now() - start, "Password encrypted");
//   });
//   crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
//     console.log(Date.now() - start, "Password encrypted");
//   });
//   crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
//     console.log(Date.now() - start, "Password encrypted");
//   });
// });

// console.log("hello from the top-level code");

//🔸output:
// hello from the top-level code
// Timer 1 finished
// immediate 1 finished
// I/O finished
// -------------
// Process.nextTick
// immediate 2 finished
// Timer 2 finished
// 1664 Password encrypted
// 1704 Password encrypted
// 1705 Password encrypted
// 1762 Password encrypted
// Timer 3 finished

//🔴 Sync version or cyrpto ;
const fs = require("fs");
const crypto = require("crypto");

const start = Date.now();

setTimeout(() => console.log("Timer 1 finished"), 0);
setImmediate(() => console.log("immediate 1 finished"));

fs.readFile("test-file.txt", () => {
  console.log("I/O finished ");
  console.log("------------- ");

  setTimeout(() => console.log("Timer 2 finished"), 0);
  setTimeout(() => console.log("Timer 3 finished"), 3000);
  setImmediate(() => console.log("immediate 2 finished"));

  process.nextTick(() => console.log("Process.nextTick"));

  crypto.pbkdf2Sync("password", "salt", 100000, 1024, "sha512");
  console.log(Date.now() - start, "Password encrypted synchronously");

  crypto.pbkdf2Sync("password", "salt", 100000, 1024, "sha512");
  console.log(Date.now() - start, "Password encrypted synchronously");

  crypto.pbkdf2Sync("password", "salt", 100000, 1024, "sha512");
  console.log(Date.now() - start, "Password encrypted synchronously");

  crypto.pbkdf2Sync("password", "salt", 100000, 1024, "sha512");
  console.log(Date.now() - start, "Password encrypted synchronously");
  // above is sync version of crypto, SO this one will then excrypt the password
  // block the code execution and then move on to the next line which will
  // then log the "Password encrypted synchronously" to the console

  // so the above four password encryptions will no longer run in the event loop
  // and so they will no longer be offloaded to the thread pool
});

console.log("hello from the top-level code");

//🔸output:
// hello from the top-level code
// Timer 1 finished
// immediate 1 finished
// I/O finished
// -------------
// 1472 Password encrypted synchronously
// 2930 Password encrypted synchronously
// 4372 Password encrypted synchronously
// 5802 Password encrypted synchronously
// Process.nextTick
// immediate 2 finished
// Timer 2 finished
// Timer 3 finished

//🔸as we can see above the synchronous password encryption runs outside of event loop
//  which worse blocks the process.nextTick()  as well as all the timer function
//  this was blocking the entire execution, as we can see the first setTimeout was
//  finished after 0 second still it was log after the completion of synchronous code
