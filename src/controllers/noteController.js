import NoteListView from './../views/noteListView.js'

class NoteController {
  constructor(noteList, NoteListViewModule = NoteListView) {
    this.noteList = noteList
    this.noteListView = new NoteListViewModule(this.noteList)
  }

  addNote(text) {
    this.noteList.createNote(text)
  }
}

export default NoteController