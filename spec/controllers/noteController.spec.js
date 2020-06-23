import NoteList from '../../src/modules/noteList';
import NoteController from '../../src/controllers/noteController'
jest.mock('../../src/modules/noteList')

describe('note controller', () => {

  afterEach(() => NoteList.mockClear())

  it('stores a given note list as a parameter', () => {
    const noteController = (new NoteController(new NoteList))
    expect(noteController.noteList).toBeInstanceOf(NoteList)
  })

  it('can add a new note to a note list', () => {
    const noteList = {
      createNote: jest.fn()
    }
    const noteController = (new NoteController(noteList))
    noteController.addNote('new note')
    expect(noteList.createNote).toHaveBeenCalledWith('new note')
  })

  it('creates a noteListView with note list', () => {
    //TODO
  })

  it('inserts stored notes as HTML', () => {
    //TODO
  })
})