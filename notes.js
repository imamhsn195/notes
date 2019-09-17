console.log('starting notes.js');

var fs = require('fs');

var fatchNotes = () => {

	try{
	    var notesString = fs.readFileSync('notes-data.json');
	    return JSON.parse(notesString);
	}
	catch(e){
		return [];
	}
}

var saveNotes = (notes) => {
	fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}

var addNote = (title, body) => {
    notes = fatchNotes();
    note = {
    	title,
    	body
    };

var duplicateNotes = notes.filter((note) => note.title === title);

	if(duplicateNotes.length === 0 ){
		notes.push(note);
		saveNotes(notes);
		return note;
	}else{
		console.log("Note title is taken");
	}
};

var getAll = () => {
    console.log('Getting all notes');
}

var getNote = (title) => {
	var notes = fatchNotes();
	var filteredNote = notes.filter((note) => {
		return note.title === title;
	});
	return filteredNote[0];
    console.log("Getting Note: ", title);
}

var removeNote = (title) => {
	var notes =  fatchNotes();
	var filteredNotes = notes.filter((note) => note.title !== title);
	saveNotes(filteredNotes);
	return notes.length !== filteredNotes.length;
}
module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
}
