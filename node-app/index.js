const http = require('http');
const fs = require('fs');

const port = process.env.port;

const handleFile = (fileLocation, statusCode, req, res) => {
    fs.readFile(fileLocation, 'utf-8', (err, data)=>{
        if(err){
            console.log(err);
        }
        else{
            res.writeHead(statusCode, {"Content-Type":"text/html"});
            res.write(data);
            res.end();  
        }
    })
}

const server = http.createServer((req, res)=>{
    if(req.url === "/"){
        handleFile("./views/index.html", 200, req, res)
    }
    else if(req.url === "/about"){
        handleFile("./views/about.html", 200, req, res)
    }
    else if(req.url === "/contact"){
        handleFile("./views/contact.html", 200, req, res)
    }
    else{
        handleFile("./views/error.html", 404, req, res)
    }
})

server.listen(port, ()=>{
    console.log('server is running');
})