// var obj = {
//     name: 'imam'
// };

// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);

// var personString = '{"name":"imam","age":25}';
// var person = JSON.parse(personString);
// console.log(typeof person);
// console.log(person);

const fs = require('fs');
var originalNote = {
    title: "some title",
    body: "some body"
};
var originalNoteSting = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteSting);
var noteString = fs.readFileSync('notes.json');
var note = JSON.parse(noteString);
console.log(note);
console.log(note.title);
console.log("015 working with JSON");