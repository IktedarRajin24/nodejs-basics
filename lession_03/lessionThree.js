//if we need os entirely
const os = require('os');
console.log(os.userInfo());
console.log(os.totalmem());

//if we don't need os entirely

const {totalmem, freemem} = require('os');

console.log(totalmem());
console.log(freemem());

console.log(__dirname);
console.log(__filename);

const path = require('path');
const extensionName = path.extname("index.html");
console.log(extensionName)

const joinName = path.join(__dirname + "/../lession_04");
console.log(joinName);