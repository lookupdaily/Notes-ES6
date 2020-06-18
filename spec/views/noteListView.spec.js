import NoteList from '../../src/modules/noteList';
import NoteListView from "../../src/views/noteListView"
jest.mock('../../src/modules/noteList')

describe('Note List View', () => {
  let noteListView;
  let noteList;

  beforeEach(()=> {
    const notes = [{text: "My Favourite language is javascript"}]
    NoteList.mockImplementation(() => {
      return {
        notes: notes
      }
    })
    noteList = new NoteList
    noteListView = new NoteListView(noteList)
  })

  afterEach(() => NoteList.mockClear())

  it('creates a html list of stored notes', () => {
    expect(noteListView.notesToHTMl()).toEqual('<ul><li><div>My Favourite language is javascript</div></li></ul>')
  })
})