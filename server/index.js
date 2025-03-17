const http = require("http");
const fs = require("fs")

const myServer = http.createServer((req,res)=>{
    const log = `${Date.now()}: ${req.url} New data recieved\n`
    fs.appendFile("log.txt", log, (err,data)=>{
        if(req.url==='/'){
            res.end("This is home page");
        }
        else if(req.url==='/about'){
            res.end("This is about page");
        }
        else if(req.url==='/contact'){
            res.end("This is contactus page");
        }
        else{
            res.end("Error 404 not found");
        }
    })

});

myServer.listen(8000, ()=>console.log("server started"));