//  HTTP module :-
const http = require('http');
const fs = require("fs");
const path = require("path");

const app = http.createServer((req,res)=>{
    // res.writeHead(200,{'content-type': 'text/html'})
    // if(req.url === "/"){
    //     fs.readFile(path.join(__dirname,'public', 'index.html'), (err,data)=>{
    //         if(err){
    //             throw err
    //         }
    //             res.end(data)
    //     })
    // } else if(req.url === "/about"){
    //     fs.readFile(path.join(__dirname,'public', 'about.html'), (err,data)=>{
    //         if(err){
    //             throw err
    //         }
    //             res.end(data)
    //     })
    // }
    let filepath = path.join(__dirname,'public',req.url === '/' ? "index.html" : req.url);

    let contentType = 'text/html';
    let ext = path.extname(filepath)
    if (!ext){
        filepath += '.html'
    }

    switch (ext) {
        case '.css':
            contentType = 'text/css'
            break;
        case '.js':
            contentType = 'application/javascript'
            break;
        default:
            contentType = 'text/html'
    }

    fs.readFile(filepath,(err,content)=>{
        if(err){
            fs.readFile(path.join(__dirname,'public','error.html'),(err,data)=>{
                if(err){
                    res.writeHead(404)
                    res.end("404 not found")
                }
                else{
                    res.writeHead(404,contentType)
                    res.end(data) 
                }
                
            })
        }
        else{
            res.writeHead(200,contentType)
            res.end(content)
        }
    })
});

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});