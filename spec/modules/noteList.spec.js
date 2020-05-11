import Note from '../../src/modules/note'
import NoteList from '../../src/modules/noteList'


describe('Note List', () => {
  let noteList;
  let note;
  
  beforeEach(() => {
    note = jest.fn() 
    noteList = new NoteList(Note)
  })

  it('is instantiated with an empty array of notes', () => {
    expect(noteList.notes.length).toBe(0)
  })

  describe('#createNote', () => {

    beforeEach(() => {
      noteList.createNote('My favourite language is JavaScript')
    })

    it('stores a new note', () => {
      expect(noteList.notes.length).toBe(1)
    })

    it('stored note is an instance of note model', () => {
      expect(noteList.notes[0]).toBeInstanceOf(Note)
    })
  })
})