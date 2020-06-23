"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class Note {
  constructor(text) {
    this._text = text;
  }

  get text() {
    return this._text;
  }

}

var _default = Note;
exports.default = _default;