describe('Note List', () => {
  let noteList;

  beforeEach(() => {
    noteList = new NoteList()
  })

  it('is instantiated with an empty array of notes', () => {
    expect(noteList.notes.length).toBe(0)
  })
})