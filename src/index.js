import NoteList from './modules/NoteList'
import NoteListView from './views/NoteListView'


const noteDisplay = document.getElementById('notes')
const noteList = new NoteList()
const noteListView = new NoteListView(noteList)

noteList.createNote('my favourite language is javascript')
noteDisplay.innerHTML = noteListView.notesToHTML()