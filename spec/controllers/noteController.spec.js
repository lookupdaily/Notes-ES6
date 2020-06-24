import NoteList from '../../src/modules/noteList';
import NoteController from '../../src/controllers/noteController';
import NoteListView from '../../src/views/noteListView';

jest.mock('../../src/modules/noteList');
jest.mock('../../src/views/noteListView');

describe('note controller', () => {
  let noteList;
  let noteController;

  beforeEach(() => {
    document.body.innerHTML = `<div id="notes">Hello, world!</div>`;
    noteList = new NoteList();
    noteController = (new NoteController(noteList));
  });

  afterEach(() => {
    NoteList.mockClear();
    NoteListView.mockClear();
  });

  it('creates a noteListView with note list', () => {
    expect(NoteListView).toHaveBeenCalledWith(noteList);
  });

  it('can add a new note to a given note list', () => {
    noteController.addNote('my first note');
    expect(noteList.createNote).toHaveBeenCalledWith('my first note');
  });

  it('adding a note re-renders all notes', () => {
    noteController.noteListView.notesToHTMl.mockImplementation(() => {
      return '<ul><li><div>my first note</div></li></ul>'
    });
    
    noteController.addNote('my first note');
    expect(document.getElementById('notes').innerHTML).toEqual('<ul><li><div>my first note</div></li></ul>');
  });
  

  it('inserts stored notes as HTML', () => {
    noteController.noteListView.notesToHTMl.mockImplementation(() => {
      return '<ul><li><div>my first note</div></li></ul>'
    });
    
    noteController.renderNotes();
    expect(document.getElementById('notes').innerHTML).toEqual('<ul><li><div>my first note</div></li></ul>');
  });
});