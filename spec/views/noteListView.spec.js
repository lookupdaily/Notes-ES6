import NoteList from '../../src/modules/noteList';
import NoteListView from "../../src/views/noteListView"
jest.mock('../../src/modules/noteList')

describe('Note List View', () => {
  let noteListView;

  beforeEach(()=> {
    NoteList.mockClear()
  })

  it('calls mock constructor', () => {
    noteListView = new NoteListView(new NoteList)
    expect(NoteList).toHaveBeenCalledTimes(1);
  })

  it('creates a html list of stored notes', () => {
    const notes = [{text: "My Favourite language is javascript"}]
    NoteList.mockImplementation(() => {
      return {
        notes: notes
      }
    })
    let noteList = new NoteList
    noteListView = new NoteListView(noteList)
    expect(noteListView.notesToHTMl()).toEqual('<ul><li><div>My Favourite language is javascript</div></li></ul>')
    
  })
})