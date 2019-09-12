console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');
const _ = require('lodash');

var filteredArray = _.uniq(['imam', 2, 1, 2, "Imam"]);
console.log(filteredArray);

// console.log(_.isString(true));
// console.log(_.isString("Imam"));
// console.log('Result:', notes.add(9, -5));

// var user = os.userInfo();
// fs.appendFile('greeting.txt', `Hello ${user.username}! you are ${notes.age}`, (err) => {
//     if (err) throw err;
//     console.log('The "Hello world" line was appended to the file.');
// });