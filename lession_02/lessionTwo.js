const fs = require('fs');

fs.writeFile('demo.txt', "Learning node.js", err =>{
    if(err){
        console.log(err);
    }
    else{
        console.log("successful");
    }
})

fs.appendFile('demo.txt', ". I know fs module...", err=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("Successful");
    }
})

fs.readFile('demo.txt', 'utf-8', (err, data)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log(data);
    }
})

fs.rename('demo.txt', 'nodeJS.txt', err=>{
    if(err){
        console.log(err);
    }
    else{
        console.log('successful');
    }
})

fs.unlink('nodeJS.txt', err=>{
    if(err){
        console.log(err);
    }
    else{
        console.log('successful');
    }
})