import Note from './note'

class NoteList {
  constructor() {
    this._notes = []
  }

  get notes() {
    return this._notes
  }

  createNote(text) {
    this._notes.push(new Note(text))
  }
}

export default NoteList