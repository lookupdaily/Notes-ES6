"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class NoteListView {
  constructor(noteList) {
    this._noteList = noteList;
  }

  notesToHTMl() {
    let html = '<ul>';

    this._noteList.notes.forEach(note => {
      html += "<li><div>".concat(note.text, "</div></li>");
    });

    return html + '</ul>';
  }

}

var _default = NoteListView;
exports.default = _default;