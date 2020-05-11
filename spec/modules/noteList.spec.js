import NoteList from '../../src/modules/noteList'

describe('Note List', () => {
  let noteList

  beforeEach(() => {
    noteList = new NoteList()
  })

  it('is instantiated with an empty array of notes', () => {
    expect(noteList.notes.length).toBe(0)
  })

  it('stores a new note', () => {
    noteList.createNote('My favourite language is JavaScript')
    expect(noteList.notes[0].text).toEqual('My favourite language is JavaScript')
  })
})