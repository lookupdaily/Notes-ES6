import NoteList from '../../src/modules/noteList';
import NoteController from '../../src/controllers/noteController';
import NoteListView from '../../src/views/noteListView';

jest.mock('../../src/modules/noteList')
jest.mock('../../src/views/noteListView')

describe('note controller', () => {

  beforeEach(() => NoteList.mockClear())

  it('stores a given note list as a parameter', () => {
    const noteController = (new NoteController(new NoteList))
    expect(noteController.noteList).toBeInstanceOf(NoteList)
  })

  it('creates a noteListView with note list', () => {
    const noteList = new NoteList
    new NoteController(noteList, NoteListView)
    expect(NoteListView).toHaveBeenCalledWith(noteList)
    
  })

  it('can add a new note to a note list', () => {
    const noteList = new NoteList()
    const noteController = (new NoteController(noteList))
    noteController.addNote('new note')
    expect(noteList.createNote).toHaveBeenCalledWith('new note')
  })

  it('adding a note re-renders all notes', () => {
    // TODO
  })
  

  it('inserts stored notes as HTML', () => {
    //TODO
  })
})