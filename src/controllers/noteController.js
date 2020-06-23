class NoteController {
  constructor(noteList) {
    this.noteList = noteList
  }

  addNote(text) {
    this.noteList.createNote(text)
  }
}

export default NoteController