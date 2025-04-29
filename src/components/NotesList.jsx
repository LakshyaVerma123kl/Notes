import { useState } from "react";

const NotesList = ({ onEdit, onAddNewNote, onDelete, notes }) => {
  const [sortBy, setSortBy] = useState("updatedAt");

  const handleDelete = (noteId) => {
    onDelete(noteId);
  };

  return (
    <div className="animate-fade-in">
      <h2 className="text-2xl font-semibold text-indigo-600 mb-6">
        Your Notes
      </h2>
      <div className="mb-4">
        <label className="mr-2 font-medium text-gray-700">Sort by:</label>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 shadow-md"
        >
          <option value="updatedAt">Last Modified</option>
          <option value="createdAt">Created</option>
          <option value="title">Title</option>
        </select>
      </div>
      {notes.length === 0 ? (
        <p className="text-gray-500">No notes found.</p>
      ) : (
        <ul className="space-y-6">
          {notes.map((note) => (
            <li
              key={note.id} // Ensure this key is unique for each note
              className="bg-white border border-gray-300 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
            >
              <h3 className="font-semibold text-xl text-gray-800 hover:text-indigo-600">
                {note.title}
              </h3>
              <p className="text-gray-600 text-sm mt-2 line-clamp-2">
                {note.content}
              </p>
              <p className="text-gray-400 text-xs mt-3">
                Last modified: {new Date(note.updatedAt).toLocaleString()}
              </p>
              <div className="flex justify-between items-center mt-4">
                <button
                  onClick={() => onEdit(note)}
                  className="bg-indigo-500 text-white px-4 py-2 rounded-xl hover:bg-indigo-600 transition-all transform hover:scale-105"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(note.id)}
                  className="bg-red-600 text-white px-4 py-2 rounded-xl hover:bg-red-700 transition-all transform hover:scale-105"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <button
        onClick={onAddNewNote}
        className="mt-6 bg-green-500 text-white px-5 py-2 rounded-xl transition-all transform hover:scale-105 hover:bg-green-600"
      >
        Add New Note
      </button>
    </div>
  );
};

export default NotesList;
