export const mockNotes = jest.fn();
const mock = jest.fn().mockImplementation(() => {
  return {notes: mockNotes};
});

export default mock;