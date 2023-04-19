const http = require('http');

const hostname = "127.0.0.1";
const port = "3000";


const myServer = http.createServer((req, res)=>{
    res.end("Hello, I am your first server!");
});

myServer.listen(port, hostname, ()=>{
    console.log(`Server is successfully running at http://${hostname}:${port}`);
});