
//🔴 Synchronous  Vs. Asynchronous Code (Blocking  Vs. Non-Blocking)


//🔘Synchronous (Blocking) : Synchronous programming means that the code runs in the sequence it is defined. 
//                           In a synchronous program, when a function is called and has returned some value,
//                           only then will the next line be executed.

//🔸ex: In the previous Lecture we learn to use module (NodeJS is compiling the code synchronously)
// const fs = require('fs')           
// const textInput = fs.readFileSync('./1-node-farm/starter/txt/input.txt', 'utf-8');
// console.log(textInput) ;

//🔸Here we can say that each process is basically processed one after another line by line
//  in the above example first the module is required, then we store the result in a variable then we log it to the console.
// SO here each line of code basically waits for the result of the previous line

//🔸Problem : This can become a problem specially with slow operations because each libe blocks the execution of the rest of the code
// hence we called that synchronous code is also callled Blocking code.
// because a certain operation can only be executed after the previous one is completed

//❓Solution : Is to use Aysnchronous (Non-Blocking code)

//🔘Asynchronous (Non-Blocking) : Asynchronous programming is a technique that enables your program to start a potentially long-running task
//                              and still be able to be responsive to other events while that task runs, rather than having to wait until that task has finished. 
//                              Once that task has finished, your program is presented with the result


//ex: Async code to readfile :
//   const fs = require("fs") ;
//   fs.readFile('input.txt', 'utf-8', (err, data) => {
//      console.log(data);
//   });
//   console.log("Reading file...");

//🔸output: first the aysnc readfile function will be executed and perform its task of reading data while
// it reading data we it will log "Reading file.." without blocking its execution and after readfile execution is
// complete for reading data from input.txt it will run a callback function which logs "data";



// ❓How does Async (Non-Blocking code) work  : 
// So in asynchronous code we upload a heavy work to basically be worked on in the background
// and once that work is done. a callback function that we register before is called to handle the result.
// and during all that time the rest of the code can still be executed. without being blocked by the heavy task
// which is now running in the background


// ❓ Why do we need to use callback so many time in NodeJs in order to understand these question
// lets first understand the fact that a node.js process which is where our app is running there is
// only (🔘One Single Thread), and the thread is just like a set of intruction
// that runs in computer CPU, 

// So basically the thread is where our code is actually executed in a machine's processor.
// So that's why nodejs is called Single threaded, and so for each application theres only one thread.
// Means all the user using your application are accessing the same thread.
// so whenever the code that is run for each user will be executed all in the same thread at the same place
// in the computer runnning the application.
// That is true no matter you have a five users or 5000 user or 5million users

// So if there is user accessing your application will block the accessibility of thread for other users now this might 
// not be the case to worry if we have only 5 users but imagine theres a user accessing your application and theres
// huge synchronous file read in your code that  will take like on second to load, means for that one second all other user
// will have to wait bcoz entire execution is blocked for that one second, so even though other users want to perfrom simple task
// like logging into your app or requesting some data they wont be able to do so, they will have to wait till the previous user request is
// completed.

//🔸SO in this kind of situation we should use asycn process that runs the task in background so other user can also perfrom there task.
// and for that we also register a callback function for when a request is completed it will complete its execution, without blockinh other users
//🔸 after the background execution of async function is complete it is then send back to main single thread for its execution

//🔸 Note: when we use callback in our code that doesnt make it automatically asynchronous, passing function in our function
// is common i javscript which doesnt make it asynchronous automatically, 
// It only works this way for some function in the Node API, such as readFile and etc

//🔘 Callback function: 
// const fs = require('fs'); 

// fs.readFile('start.txt', 'utf-8', (err, data1) => {
//     fs.readFile('${data1}.txt', 'utf-8', (err, data2) => {
//         fs.readFile('append.txt', 'utf-8', (err, data3) => {
//             fs.writeFile('final.txt',`${data2} ${data3}`, 'utf-8', (err, data) => {
//                 if(err) throw err;
//                 console.log("Your file has been saved: D");
//             });
//         });
//     });
// });

//🔸In the above callback code the second file is reading data after completion of first data, then 
// the third callback func is reading file from append.txt and 4th func is writeing file using data2, and data3
// from 2nd and 3rd callback fucntion, Now this will work just fine but it is kind of hard to understand, 
// the above code is of 4 level , what if we had code for 10 or 20 level, so this will become
// (🔘Callback Hell)


//❓Solution: Is to use ES6 Promises / or even better ES8 Async/await