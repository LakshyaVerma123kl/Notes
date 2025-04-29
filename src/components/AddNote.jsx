import { useState, useEffect } from "react";

const AddNote = ({ noteToEdit, onAdd, onError }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (noteToEdit) {
      setTitle(noteToEdit.title);
      setContent(noteToEdit.content);
    }
  }, [noteToEdit]);

  const handleSave = () => {
    if (!title || !content) {
      onError("Title and content are required!");
      return;
    }
    const newNote = {
      title,
      content,
      createdAt: noteToEdit ? noteToEdit.createdAt : new Date(),
      updatedAt: new Date(),
    };
    onAdd(newNote);
  };

  return (
    <div className="animate-fade-in">
      <h2 className="text-3xl font-bold text-indigo-600 mb-6">
        {noteToEdit ? "Edit Note" : "Add a New Note"}
      </h2>
      <div className="mb-6">
        <label className="block text-lg font-medium text-gray-700">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 shadow-md"
          placeholder="Enter note title"
        />
      </div>
      <div className="mb-6">
        <label className="block text-lg font-medium text-gray-700">
          Content
        </label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 shadow-md"
          placeholder="Enter note content"
          rows="6"
        />
      </div>
      <div className="flex justify-between items-center">
        <button
          onClick={handleSave}
          className="bg-indigo-500 text-white px-6 py-3 rounded-xl hover:bg-indigo-600 transition-all transform hover:scale-105"
        >
          {noteToEdit ? "Save Changes" : "Add Note"}
        </button>
      </div>
    </div>
  );
};

export default AddNote;
