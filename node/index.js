// console.log('running this code using node environment');

// //NOTE MODULES

// //NOTE CLIENT SIDE=> two types:

// //LOCAL MODULES
// //THIRD PARTY MODULES

// //NOTE SERVER
// //INBUILT MODULES => fs , os , http , event , https , url , path , crytpo ,

// //NOTE COMMON _ JS _ MODULES

// // const firstName = require('./variables.js')
// const { firstName, age } = require('./variables.js');

// console.log(firstName, age);

// //inbuilt fs module
// const fs = require('fs');

// //fs module return two types => synchronous and asynchronous

// //READING A FILE

// //NOTE SYNCRONOUS VERSION
// console.log('reading file started ...');
// const data = fs.readFileSync('./read.txt', 'utf-8');
// console.log(data);
// console.log('reading file ended');

// //async version
// console.log('async file reading started..');
// fs.readFile('./read.txt', 'utf-8', (err, data) => {
//   console.log(data);
// });
// console.log('async file reading ended..');

// const filepath = ['file1.txt', 'file2.txt'];

// filepath.forEach((path, index) => {
//   fs.readFile(path, 'utf-8', (err, data) => {
//     console.log(data);
//     fs.writeFile(`CopyFile${index + 1}.txt`, data, () => {
//       console.log(' write file success');
//     });
//   });
// });
// // multipleFilesRead(filepath)

// //Async version

// fs.writeFile('newfile.txt', 'THIS IS NEW FILE', () => {
//   console.log('Write file successfull');
// });

// // file1 => copyFile1.txt
// // file2 => copyfile2.txt

// //unlink file delete
// fs.unlink('delete.txt', (err) => {
//   if (err) console.log(err);
//   console.log(' unlink success');
// });

// //mkdir
// fs.mkdir('notes', (err) => {
//   if (err) console.log(err);
//   console.log(' folder creation success');
// });

// //append
// fs.appendFile('file1.txt', '\n new text', () => {});

// //rename
// fs.rename('old.txt', 'new.txt', () => {});

// const user = [{name : "test1" },{name:"test2"}]
// //saves it into a .json file
// fs.writeFile('user.json' , JSON.stringify(user) , (err)=>{
//     if(err) console.log(err);
//     console.log('success')
// })

const path = require('path');

console.log(__filename);
console.log(__dirname);

//path.join
const newpath = path.join('home', 'desktop', 'file.txt');
console.log(newpath);

const completepath = path.join(__dirname, 'file1.txt');
console.log(completepath);

//path.resolve
console.log(path.resolve('file1.txt'));
//path.extname
console.log(path.extname('file.txt'));
//path.basename
console.log(path.basename('/folder/user/newuser.txt'));
//path.dirname
console.log(path.dirname('/folder/user/newfile.txt'));

//path.parse
console.log(path.parse('/desktop/users/node.js'))

//NOTE OPERATING SYSTEM
const os = require('os') ;
console.log(os.freemem())
console.log(os.cpus())
console.log(os.arch())
console.log(os.platform())


//(__filename , __dirname , require())
//NOTE 
console.log(global)
console.log(process)
var firstname ;

