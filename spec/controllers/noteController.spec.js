import NoteList from '../../src/modules/noteList';
import NoteController from '../../src/controllers/noteController'
jest.mock('../../src/modules/noteList')

describe('note controller', () => {

  it('stores a given note list as a parameter', () => {
    const noteController = (new NoteController(new NoteList))
    expect(noteController.noteList).toBeInstanceOf(NoteList)
  })
})