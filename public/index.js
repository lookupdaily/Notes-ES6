"use strict";

var _NoteList = _interopRequireDefault(require("./modules/NoteList"));

var _NoteListView = _interopRequireDefault(require("./views/NoteListView"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const noteDisplay = document.getElementById('notes');
const noteList = new _NoteList.default();
const noteListView = new _NoteListView.default(noteList);
noteList.createNote('my favourite language is javascript');
noteDisplay.innerHTML = noteListView.notesToHTML();