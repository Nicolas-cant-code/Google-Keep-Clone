// GOOGLE KEEP APP

// Super Class Note
class Note {
    constructor(id, title, text) {
        this.id = id;
        this.title = title;
        this.text = text;
    }
}

// App
class App {
    constructor() {
        this.notes = [];
    }

    // Adds a note
    addNote(id, {title, text}) {
        const newNote = new Note(id,title,text);
        this.notes.push(newNote);
    }

    // Edits a note
    editNote(id, {title, text}) {
        this.notes.map(note => {
            if (note.id == id) {
                note.title = title;
                note.text = text;
            }
        })
    }

    // Delete a note
    deleteNote(id) {
        this.notes = this.notes.filter(note => note.id !=id);
    }

    // Display
    displayNotes() {
        this.notes.map(note => console.log(`
            ID: ${note.id}
            Title: ${note.title}
            Text: ${note.text}
            `))
    }
}

const app = new App();