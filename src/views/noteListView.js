class NoteListView {
  constructor(noteList) {
    this._noteList = noteList
  }

  get notesToHTMl() {
    let html = '<ul>'
    this._noteList.notes.forEach((note) => {
      html + `<li><div>${note.text()}</div></li>`
    })
    return html + '</ul>'
  }
}

export default NoteListView