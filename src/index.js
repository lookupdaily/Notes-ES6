import NoteList from './modules/noteList.js'
import NoteController from './controllers/noteController.js'


const noteList = new NoteList()
const noteController = new NoteController(noteList)

noteController.addNote('my favourite language is javascript')
