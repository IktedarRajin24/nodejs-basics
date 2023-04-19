const http = require('http');
const fs = require('fs');

const port = 3000;
const host = '127.0.0.1';

const server = http.createServer((req, res)=>{
    const handleFileRequest = (statusCode, fileLocation) =>{
        fs.readFile(fileLocation, (err,data)=>{
            res.writeHead(statusCode, {"Content-Type": "text/html"});
            res.write(data);
            res.end();
        })
    }

    if(req.url === "/"){
        handleFileRequest(200, "./views/home.html")
    }
    else if(req.url === "/about"){
        handleFileRequest(200, "./views/about.html")
    }
    else if(req.url === "/contact"){
        handleFileRequest(200, "./views/contact.html")
    }
    else{
        handleFileRequest(404, "./views/error.html")
    }
})

server.listen(port, host, ()=>{
    console.log(`server is running at http://${host}:${port}`);
})