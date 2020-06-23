"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _note = _interopRequireDefault(require("./note"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class NoteList {
  constructor() {
    let noteModel = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _note.default;
    this._notes = [];
    this._noteModel = noteModel;
  }

  get notes() {
    return this._notes;
  }

  createNote(text) {
    this._notes.push(new this._noteModel(text));
  }

}

var _default = NoteList;
exports.default = _default;