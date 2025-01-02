
// in background node js work like this IIFE (Immediately Invoked Function Expression)

// (function(name,exports,module,__filename,__dirname , require){
//     const color = require('cli-color');
//     var age = 25
//     console.log(name)
// })("vivek");

// const color = require('cli-color');
// var age = 25
// console.log(color.red(age));


// Local Modules

// const auth =  require('./auth');

// auth.register("vivek")
// auth.loggedin("dis.", 1010);


// Core modules
// path module
// const path = require('path');
// dirname :- give Folder Name
// console.log("Folder Name - "+path.dirname(__filename));
// basename :- give File Name
// console.log("File NAme - "+path.basename(__filename));
// extname :- give File Extension
// console.log("File Extension - "+path.extname(__filename));
// parse :- give Path, Folder Name , Base name , Extension
// console.log("parse - "+path.parse(__filename));
// join :- join two folder 
// console.log("join - "+path.join(__dirname,"/nodejs/"));


// File System Module:- 
// fs :- file system
const fs = require('fs');
//mk dir
    // fs.mkdir(path.join(__dirname,"/test"),(err)=>{
    //     if (err){
    //         console.log(err);
    //         return
    //     }
    //     console.log("folder Created...")
    // })
// Create File
    // fs.writeFile(path.join(__dirname,"test","test.txt"),
    // "hello node How are you",(err)=>{
    //     if (err){
    //         console.log(err);
    //         return
    //     }
    //     fs.appendFile(path.join(__dirname,"test","test.txt")," more data Append",(err)=>{
    //         if (err){
    //             console.log(err);
    //             return
    //         }})
    //     console.log("file Created...")
    // })
// Read file
    // fs.readFile(path.join(__dirname,"test","test.txt"),"utf8",(err,data)=>{
    //     if (err){
    //         console.log(err);
    //         return
    //         }
    //         console.log(data);
    // })


// Os Module :-
// os :- operating system
const os = require('os');
//  os type :-
    // console.log("os type - "+os.type());

//  os platform :-
    // console.log("os platform - "+os.platform());

//  cpu architecture :-
    // console.log("cpu architecture - "+os.arch());

// cpu details :-
    // console.log("cpu details - "+os.cpus());

// Free memory
    // console.log("Free memory - "+os.freemem());

//  total memory
    // console.log("total memory - "+os.totalmem());

// up time
    // console.log("up time - "+os.uptime());


// Events Module :-

// const Emitter = require('events');
// const myEmitter = new Emitter();


// myEmitter.on('event',function(data){
//     console.log(data);
// });
// myEmitter.emit('event',{name : 'vivek'});

// class Auth extends Emitter{
//     register(username){
//         console.log('register successfully...');
//         this.emit('registered',username)
//     }
// }

// const auth = new Auth();
// // listen 
//  //veryfy email
// auth.on('registered', (data)=>{
//     console.log(`sending email to ${data}`)
// })
// //welcome email
// auth.on('registered', (data)=>{
//     console.log(`sending welcome email to ${data}`)
// })

// auth.register("vivek");
