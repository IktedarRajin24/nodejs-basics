const express = require("express");
const router = express.Router();

router.get("/contacts", (req, res)=>{
    res.send(`<h1>This is contacts</h1>`);
});

router.get("/register", (req, res)=>{
    res.send(`<h1>This is sign up</h1>`);
});

router.get("/login", (req, res)=>{
    res.send(`<h1>This is login</h1>`);
});

router.get("/dashboard", (req, res)=>{
    res.send(`<h1>This is dashboard</h1>`);
});

router.post("/", (req, res)=>{
    res.send(`<h1>This is post method</h1>`);
});

router.put("/", (req, res)=>{
    res.send(`<h1>This is put method</h1>`);
});

router.delete("/", (req, res)=>{
    res.send(`<h1>This is delete method</h1>`);
});

module.exports = router;