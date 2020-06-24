import NoteListView from './../views/noteListView.js'

class NoteController {
  constructor(noteList) {
    this.noteList = noteList
    this.noteListView = new NoteListView(this.noteList)
  }

  addNote(text) {
    this.noteList.createNote(text)
  }

  renderNotes() {
    console.log(this.noteListView.notesToHTMl())
    console.log(document.getElementById('notes'))
    document.getElementById('notes').innerHTML = this.noteListView.notesToHTMl()
  }
}

export default NoteController