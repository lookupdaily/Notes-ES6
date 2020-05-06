import Note from './modules/note'

noteDisplay = document.getElementById('note-container')

note = new Note('my favourite language is javascript')

noteDisplay.innerHTML = note.text