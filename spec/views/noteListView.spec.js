import NoteList from '../../src/modules/noteList';
import NoteListView from "../../src/views/noteListView"
jest.mock('../../src/modules/noteList')

describe('Note List View', () => {
  let noteListView;

  beforeEach(() => NoteList.mockClear())

  it('creates a html list of one note', () => {
    NoteList.mockImplementation(() => {
      return {
        notes: [{text: "My Favourite language is javascript"}]
      }
    })
    noteListView = new NoteListView(new NoteList)
    expect(noteListView.notesToHTMl()).toEqual('<ul><li><div>My Favourite language is javascript</div></li></ul>')
  })

  it('creates a html list of more than one note', () => {
    NoteList.mockImplementation(() => {
      return {
        notes: [
          {text: "Note 1"}, 
          {text: "Note 2"}
        ]
      }
    })
    noteListView = new NoteListView(new NoteList)
    expect(noteListView.notesToHTMl()).toEqual('<ul><li><div>Note 1</div></li><li><div>Note 2</div></li></ul>')
  })

  it('handles no notes', () => {
    NoteList.mockImplementation(() => {
      return {
        notes: []
      }
    })
    noteListView = new NoteListView(new NoteList)
    expect(noteListView.notesToHTMl()).toEqual('<ul></ul>')
  })

})