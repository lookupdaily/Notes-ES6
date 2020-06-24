import NoteList from '../../src/modules/noteList';
import NoteController from '../../src/controllers/noteController';
import NoteListView from '../../src/views/noteListView';
import { JSDOM } from 'jsdom';

jest.mock('../../src/modules/noteList');
jest.mock('../../src/views/noteListView');

describe('note controller', () => {

  beforeEach(() => {
    NoteList.mockClear()
    NoteListView.mockClear()
  });

  it('creates a noteListView with note list', () => {
    const noteList = new NoteList;
    new NoteController(noteList);
    expect(NoteListView).toHaveBeenCalledWith(noteList);
  });

  it('can add a new note to a given note list', () => {
    const noteList = new NoteList();
    const noteController = (new NoteController(noteList));
    noteController.addNote('my first note');
    expect(noteList.createNote).toHaveBeenCalledWith('my first note');
  });

  it('adding a note re-renders all notes', () => {
    // TODO
  });
  

  it('inserts stored notes as HTML', () => {
    document.body.innerHTML = `<div id="notes">Hello, world!</div>`
    // NoteList.mockImplementation(() => {
    //   return {
    //     notes: [{text: "my first note"}]
    //   };
    // });
    jest.mock('../../src/views/noteListView', () => {
      return jest.fn().mockImplementation(() => {
        return { notesToHTML: jest.fn.mockImplementation(() => {
          return '<ul><li><div>my first note</div></li></ul>'
        })} 
      })
    })

    const noteController = (new NoteController(new NoteList));
    console.log('test', document.getElementById('notes').innerHTML)
    noteController.renderNotes();
    expect(document.getElementById('notes').innerHTML).toEqual('<ul><li><div>my first note</div></li></ul>');
  })
})