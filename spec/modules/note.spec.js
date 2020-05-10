import Note from '../../src/modules/note'

describe('Note', () => {
  let note

  beforeEach(() => {
    note = new Note('My favourite language is JavaScript')
  })

  it('creates a note with text', () => {
    expect(note.text).toEqual('My favourite language is JavaScript')
  })
})
