export const useAddNote = () => {
  const addNote = (arr, note) => {
    arr.push(note);
  };

  return { addNote };
};
