const os = require('os');

const lession01 = require('./lession_01/lessionOne');
const {age} = require('./lession_01/extra')

const getName = lession01.name();
const getJob = lession01.job();
console.log(getName, ',' , getJob);
console.log('Age:' , age());

 