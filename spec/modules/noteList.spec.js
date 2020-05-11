import NoteList from '../../src/modules/noteList'
import Note from '../../src/modules/note'

describe('Note List', () => {
  let noteList

  beforeEach(() => {
    noteList = new NoteList()
  })

  it('is instantiated with an empty array of notes', () => {
    expect(noteList.notes.length).toBe(0)
  })

  describe('#createNote', () => {
    beforeEach(() => {
      noteList.createNote('My favourite language is JavaScript')
    })

    it('stores a new note', () => {
      expect(noteList.notes[0].text).toEqual('My favourite language is JavaScript')
    })

    it('stored note is an instance of note model', () => {
      expect(noteList.notes[0]).toBeInstanceOf(Note)
    })
  })
})