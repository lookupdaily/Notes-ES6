import Note from './note'

class NoteList {
  constructor(noteModel = Note) {
    this._notes = []
    this._noteModel = noteModel
  }

  get notes() {
    return this._notes
  }

  createNote(text, model = Note) {
    this._notes.push(new this._noteModel(text))
  }
}

export default NoteList