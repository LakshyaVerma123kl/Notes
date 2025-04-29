import { useState, useCallback } from "react";
import AddNote from "./components/AddNote";
import NotesList from "./components/NotesList";
import Nav from "./components/Nav";
import { v4 as uuidv4 } from "uuid";

/**
 * Main application component for the note-taking app.
 * Manages tab state, note editing, and global error handling.
 * @returns {JSX.Element} The app UI
 */
const App = () => {
  const [tab, setTab] = useState("add");
  const [refreshKey, setRefreshKey] = useState(0);
  const [noteToEdit, setNoteToEdit] = useState(null);
  const [notes, setNotes] = useState([]);
  const [error, setError] = useState(null);

  // Memoize handlers to prevent unnecessary re-renders
  const handleAdd = useCallback(
    (newNote) => {
      if (noteToEdit) {
        // Edit existing note if it's in edit mode
        setNotes((prevNotes) =>
          prevNotes.map((note) =>
            note.id === noteToEdit.id
              ? { ...note, ...newNote, updatedAt: new Date() }
              : note
          )
        );
        setNoteToEdit(null);
      } else {
        // Add new note if it's not in edit mode
        const newNoteWithId = { ...newNote, id: uuidv4() }; // Generate unique id
        setNotes((prevNotes) => [...prevNotes, newNoteWithId]);
      }
      setTab("view");
      setRefreshKey((prev) => prev + 1);
      setError(null);
    },
    [noteToEdit]
  );

  const handleEdit = useCallback((note) => {
    setNoteToEdit(note);
    setTab("add");
    setError(null);
  }, []);

  const handleAddNewNote = useCallback(() => {
    setTab("add");
    setNoteToEdit(null);
    setError(null);
  }, []);

  const handleDelete = useCallback((noteId) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== noteId));
    setRefreshKey((prev) => prev + 1);
    setError(null);
  }, []);

  const handleError = useCallback((errorMessage) => {
    setError(errorMessage);
    setTimeout(() => setError(null), 5000); // Clear error after 5 seconds
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-200 to-pink-200 flex items-center justify-center p-4">
      <div className="max-w-xl w-full p-6 bg-white rounded-2xl shadow-xl transition-transform transform hover:scale-105">
        {error && (
          <div className="bg-red-100 text-red-800 p-3 rounded-xl mb-4 animate-fade-in">
            {error}
          </div>
        )}
        <Nav activeTab={tab} onChangeTab={setTab} />
        {tab === "add" ? (
          <AddNote
            noteToEdit={noteToEdit}
            onAdd={handleAdd}
            onError={handleError}
          />
        ) : (
          <NotesList
            onEdit={handleEdit}
            onAddNewNote={handleAddNewNote}
            onDelete={handleDelete}
            notes={notes} // Pass notes as a prop
            refreshKey={refreshKey}
            onError={handleError}
          />
        )}
      </div>
    </div>
  );
};

export default App;
