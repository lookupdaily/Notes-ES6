import Note from './note.js'

class NoteList {
  constructor(noteModel = Note) {
    this._notes = []
    this._noteModel = noteModel
  }

  get notes() {
    return this._notes
  }

  createNote(text) {
    this._notes.push(new this._noteModel(text))
  }
}

export default NoteList