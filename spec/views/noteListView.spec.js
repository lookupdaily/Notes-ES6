import NoteList from "../../src/modules/noteList";

describe('Note List View', () => {
  let noteListView;
  let noteList;

  it('can print a html string of one stored note', () => {
    noteList = jest.fn()
    noteListView = new noteListView(noteList)

    expect(noteListView.notesToHTML()).toEqual('<ul><li><div>My Favourite language is javascript</div></li></ul>')
  })
})