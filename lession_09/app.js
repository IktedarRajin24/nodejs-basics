const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post("/user", (req, res)=>{
    const name = req.body.name;
    const salary = req.body.salary;

    // console.log(req.body);

    // console.log(name, salary)

    res.send(`
        <h1>Welcome ${name}. </h1>
        <p>Your salary is BDT ${salary} taka.</p>
    
    `)
})
module.exports = app;