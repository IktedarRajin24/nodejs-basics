const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/views/index.html")
})

app.get("/circle", (req, res)=>{
    res.sendFile(__dirname + "/views/circle.html")
})

app.get("/triangle", (req, res)=>{
    res.sendFile(__dirname + "/views/triangle.html")
})

app.get("/square", (req, res)=>{
    res.sendFile(__dirname + "/views/square.html")
})

app.post("/circle", (req, res)=>{
    const radius = req.body.radius;
    const area = 3.1416 * radius * radius;
    res.send(`<h1>Area of the circle is ${area}</h1>`);
})

app.post("/triangle", (req, res)=>{
    const base = req.body.base;
    const height = req.body.height;
    const area = 0.5 * base * height;
    res.send(`<h1>Area of the triangle is ${area}</h1>`);
})

app.post("/square", (req, res)=>{
    const width = req.body.width;
    const area = width * width;
    res.send(`<h1>Area of the square is ${area}</h1>`);
})



module.exports = app;