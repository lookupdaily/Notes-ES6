import NoteList, {mockNotes} from '../../src/modules/noteList';
import NoteListView from "../../src/views/noteListView"

describe('Note List View', () => {
  let noteListView;
  let noteList;

  it('can print a html string of one stored note', () => {
    noteList = jest.mock(NoteList)
    noteListView = new NoteListView(noteList) 
    const notes = [{text: 'My Favourite language is javascript'}]

    expect(noteListView.notesToHTML()).toEqual('<ul><li><div>My Favourite language is javascript</div></li></ul>')
  })
})