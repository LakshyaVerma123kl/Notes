const NOTES_KEY = "my_notes_app";

// Get all notes from localStorage
export const getNotes = () => {
  try {
    const stored = localStorage.getItem(NOTES_KEY);
    return stored ? JSON.parse(stored) : []; // Returns an empty array if nothing found
  } catch (e) {
    console.error("Error reading from localStorage", e);
    return [];
  }
};

// Save a new note to localStorage
export const saveNote = (note) => {
  try {
    const current = getNotes();
    const newNote = { ...note, id: Date.now().toString() }; // Assign unique ID based on timestamp
    const updated = [...current, newNote]; // Add new note to existing notes
    localStorage.setItem(NOTES_KEY, JSON.stringify(updated)); // Store the updated list in localStorage
  } catch (e) {
    console.error("Error saving note", e);
  }
};

// Update an existing note in localStorage
export const updateNote = (id, updatedData) => {
  try {
    const current = getNotes();
    const updated = current.map(
      (note) => (note.id === id ? { ...note, ...updatedData } : note) // Merge updated data into the existing note
    );
    localStorage.setItem(NOTES_KEY, JSON.stringify(updated)); // Store the updated list in localStorage
  } catch (e) {
    console.error("Error updating note", e);
  }
};

// Delete a note from localStorage
export const deleteNote = (id) => {
  try {
    const current = getNotes();
    const updated = current.filter((note) => note.id !== id); // Remove the note by filtering out its id
    localStorage.setItem(NOTES_KEY, JSON.stringify(updated)); // Store the updated list in localStorage
  } catch (e) {
    console.error("Error deleting note", e);
  }
};
