const http = require('http')
const fs = require('fs')

server = http.createServer((req,res)=>{
    console.log("Request being made to the server for response");
    // console.log(reqUrl);
    res.setHeader('Content-Type','text/html')
    let reqUrl = req.url
    let resPagePath = './htmlPages'
    switch(reqUrl){
        case '/':
            res.statusCode=200
            resPagePath +='/main.html'
            break;
        case '/about':
            res.statusCode=200
            resPagePath += '/about.html'
            break;
        case '/contact':
            res.statusCode=200
            resPagePath +='/contact.html'
            break;
        case '/about-us':
            res.statusCode=301
            res.setHeader('Location', '/about') 
            res.end();
            break;
        default:
            res.statusCode = 404
            resPagePath +='/404.html'
            break;
    };
    console.log(resPagePath);
    fs.readFile(resPagePath,(err, filedata)=>{
        if(err){
            console.log(err.message);
        }
        else{
            res.end(filedata)
        }
    })
})

server.listen(3000,'localhost',()=>{
    console.log("Server started listening at localhost:3000");
})