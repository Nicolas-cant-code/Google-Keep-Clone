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
        
        this.$activeform = document.querySelector(".active-form");
        this.$inactiveform = document.querySelector(".inactive-form");
        this.noteTitle = document.querySelector("#note-title")
        this.noteText = document.querySelector("#note-text")

        this.addEventListeners();
    }
    // Event Listeners
    addEventListeners() {
        document.body.addEventListener("click", (event) => {
            this.handleFormClick(event);
        })
    }

    handleFormClick(event) {
    const isActiveFormClickedOn = this.$activeform.contains(event.target);
    const isInactiveFormClickedOn = this.$inactiveform.contains(event.target);
    const title = this.noteTitle.value;
    const text = this.noteText.value;

    if (isInactiveFormClickedOn) {
        this.openActiveForm();
    } else if (!isInactiveFormClickedOn && !isActiveFormClickedOn) {
        this.closeActiveForm();
    }
    };

    openActiveForm() {
        this.$inactiveform.style.display = "none";
        this.$activeform.style.display = "block";
        this.noteText.focus();
    }

    closeActiveForm() {
        this.$inactiveform.style.display = "block";
        this.$activeform.style.display = "none";
    }

    // Adds a note
    addNote({title, text}) {
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