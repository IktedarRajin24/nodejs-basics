const express = require('express');
const app = express();
const userRouter = require('./routes/users.route');

app.use("/api/users/",userRouter);

app.use("/register", (req, res)=>{
    // res.status(200).json({
    //     message : "Hello I am register page",
    //     statusCode : 200
    // })

    // res.redirect("/login")
    console.log(__dirname);
    res.statusCode = 202;
    res.sendFile(__dirname + "/views/register.html")
})

app.get("/login", (req, res)=>{
    
    res.statusCode = 202;
    res.sendFile(__dirname + "/views/login.html")
    res.cookie("name", "ehsan")
    res.cookie("comment", "I just a baby");
    res.clearCookie("comment");
    res.header("id", 19397661)
})

app.use("/", (req, res)=>{
    // console.log(__dirname);
    res.statusCode = 202;
    // res.sendFile(__dirname + "/views/index.html")

    const id = req.query.id;
    res.send(`student id is ${id}`);
});

app.use((req, res)=>{
    res.send(`<h1>404 Not a valid route</h1>`);
})

module.exports = app;