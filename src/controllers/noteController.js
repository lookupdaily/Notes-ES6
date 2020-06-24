import NoteListView from './../views/noteListView.js'

class NoteController {
  constructor(noteList) {
    this.noteList = noteList
    this.noteListView = new NoteListView(this.noteList)
  }

  addNote(text) {
    this.noteList.createNote(text)
    this.renderNotes()
  }

  renderNotes() {
    document.getElementById('notes').innerHTML = this.noteListView.notesToHTMl()
  }
}

export default NoteController