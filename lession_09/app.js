const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post("/user", (req, res)=>{
    const name = req.body.name;
    const salary = req.body.salary;

    res.send(`
        <h1>Welcome ${name}. </h1>
        <p>Your salary is BDT ${salary} taka.</p>
    
    `)
})

app.get("/register", (req, res)=>{
    res.sendFile(__dirname + "/views/registration.html");
});

app.post("/register", (req, res)=>{
    const {name, comment} = req.body;
    res.send(`
        <h1>
            Your name is ${name}
        </h1>
        <p>
            <b>Comment: </b>${comment}
        </p>
    `)
})
module.exports = app;