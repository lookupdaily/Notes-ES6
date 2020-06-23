import NoteList from './modules/noteList.js'
import NoteListView from './views/noteListView.js'


const noteDisplay = document.getElementById('notes')
const noteList = new NoteList()
const noteListView = new NoteListView(noteList)

noteList.createNote('my favourite language is javascript')
console.log(noteListView)
console.dir(noteListView)
console.log(noteListView.notesToHTMl())
noteDisplay.innerHTML = noteListView.notesToHTMl()