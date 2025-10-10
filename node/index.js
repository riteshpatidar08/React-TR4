console.log('running this code using node environment');

//NOTE MODULES

//NOTE CLIENT SIDE=> two types:

//LOCAL MODULES
//THIRD PARTY MODULES

//NOTE SERVER
//INBUILT MODULES => fs , os , http , event , https , url , path , crytpo ,

//NOTE COMMON _ JS _ MODULES

// const firstName = require('./variables.js')
const { firstName, age } = require('./variables.js');

console.log(firstName, age);

//inbuilt fs module
const fs = require('fs');

//fs module return two types => synchronous and asynchronous

//READING A FILE 

//NOTE SYNCRONOUS VERSION
console.log('reading file started ...')
const data = fs.readFileSync('./read.txt','utf-8')
console.log(data)
console.log('reading file ended')


//async version 
console.log('async file reading started..')
fs.readFile('./read.txt','utf-8',(err,data)=>{
console.log(data)
})
console.log('async file reading ended..')

//note filepath = ['file1.txt','file2.txt'] ;

// multipleFilesRead(filepath)