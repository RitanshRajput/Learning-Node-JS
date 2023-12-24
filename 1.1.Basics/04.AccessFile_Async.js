
// 🔴 Reading and writing file Asynchronously in NodeJS :

//🔘 Blocking (synchronous way ) :
// const fs = require('fs')           
// const textInput = fs.readFileSync('./1-node-farm/starter/txt/input.txt', 'utf-8');
// console.log(textInput) ;
// const textOut = `This is something I am adding in the existing file about avocado : ${textInput}. \n Created on ${Date.now()}`;
// fs.writeFileSync('./1-node-farm/starter/txt/output.txt', textOut);
// console.log('File Written');


//🔘🔘 NON-Blocking ( Asynchronous way) :
const fs = require('fs') ;

fs.readFile('./1-node-farm/starter/dev-data/data.json','utf-8',  (err, data) => {
    const poop = JSON.parse(data);
    console.log(poop);
});
console.log('will read File');

// Output: 
// Will read File
// read-this

//🔸 async readFile(takes path of file in 1st parameter, type of encoding in 2nd paramter, callback function(error, data) as third parameter)
// callback function takes 2 argument (err, data) : err shows if there is any error otherwise 2nd argument data shows in picture
// which shows the data requested


//🔸 example of asynchronous callback funciton to read another file result based on first callback function :

fs.readFile('./1-node-farm/starter/txt/start.txt','utf-8',  (err, data1) => {
    fs.readFile(`./1-node-farm/starter/txt/${data1}.txt`,'utf-8',  (err, data2) => {
        console.log(data2);
    });
});
console.log('Then i read this..!!');

// output: 
// Then i read this..!!
// The avocado 🥑 is also used as the base for the Mexican dip known as guacamole, as well as a spread on corn tortillas or toast, served with spices.


//🔸another axample of callback function that takes a level further to readfile from another that depends on another file

fs.readFile('./1-node-farm/starter/txt/start.txt','utf-8',  (err, data1) => {
    fs.readFile(`./1-node-farm/starter/txt/${data1}.txt`,'utf-8',  (err, data2) => {
        console.log(data2);
        fs.readFile('./1-node-farm/starter/txt/append.txt','utf-8',  (err, data3) => {
            console.log(data3);
        });
    });
});
console.log('Then i read this..!!');

// output: 
// Then i read this..!!
// The avocado 🥑 is also used as the base for the Mexican dip known as guacamole, as well as a spread on corn tortillas or toast, served with spices.
// APPENDIX: Generally, avocados 🥑 are served raw, but some cultivars can be cooked for a short time without becoming bitter


//🔸 taking example another step further to write file as well using callback function :

fs.readFile('./1-node-farm/starter/txt/start.txt','utf-8',  (err, data1) => {
    fs.readFile(`./1-node-farm/starter/txt/${data1}.txt`,'utf-8',  (err, data2) => {
        fs.readFile('./1-node-farm/starter/txt/append.txt','utf-8',  (err, data3) => {;

            fs.writeFile('./1-node-farm/starter/txt/final.txt', `${data2}\n${data3}`, 'utf-8', err => {
                console.log("The File is successfully written..✅");
            }); 
        });
    });
});
console.log('Writing a file I will run lastly ..😂 ');


//output: 
//Writing a file I will run lastly ..😂
//The File is successfully written..✅

//final.txt updated:
// The avocado 🥑 is also used as the base for the Mexican dip known as guacamole, as well as a spread on corn tortillas or toast, served with spices.
// APPENDIX: Generally, avocados 🥑 are served raw, but some cultivars can be cooked for a short time without becoming bitter.


//🔴 Dealing with errror with an example :
// const fs = require('fs');

fs.readFile('./1-node-farm/starter/txt/starttttt.txt','utf-8',  (err, data1) => {
    if(err){
        return console.log("Erroorrrr...🔥🔥🔥");
    }
    fs.readFile(`./1-node-farm/starter/txt/${data1}.txt`,'utf-8',  (err, data2) => {
        fs.readFile('./1-node-farm/starter/txt/append.txt','utf-8',  (err, data3) => {;
            fs.writeFile('./1-node-farm/starter/txt/final.txt', `${data2}\n${data3}`, 'utf-8', err => {
                console.log("The File is successfully written..✅");
            }); 
        });
    });
});
console.log('Writing a file I will run lastly ..😂 ');


//output: 
// Writing a file I will run lastly ..😂 
// Erroorrrr...🔥🔥🔥