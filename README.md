# React Note-Taking App

A simple note-taking app built with React that allows users to add, view, and edit notes. The app uses `localStorage` to persist notes on the client-side, ensuring that data is saved across page reloads. The app is designed with a clear UI, thoughtful state management.

# Why bullets

1. **Features Section**: Provided a breakdown of the key features like adding, viewing, and editing notes.
2. **Tech Stack**: Clarified the tech stack used in the project — React, `localStorage`, and Tailwind CSS.
3. **Setup & Run Steps**: Added the setup steps (clone the repo, install dependencies, and run the app).
4. **Why? Bullets**: Detailed reasons behind choosing specific tools and strategies (Storage, Component Design, State Management, Styling, and Navigation).
5. **Error & Loading States**: Explained how error handling and loading states are managed (error banners and saving indicators).

## Features

- **Add a new note**: Users can add a title and content for their note.
- **View notes**: Users can view a list of all their saved notes.
- **Edit notes**: Users can click on a note to edit its content.
- **Persistent storage**: Notes are saved to `localStorage` and persist across page reloads.
- **Minimal design**: Clean and modern UI with subtle background animations.

## Tech Stack

- **React**: Frontend library to build the UI.
- **localStorage**: To persist notes data on the client side.
- **Tailwind CSS**: For styling the UI (optional).
  **uuid**: For generating unique identifiers for each note to ensure no duplicates and allow easy updates.

## UUID for Unique Identifiers

To uniquely identify each note in the app, we use the `uuid` library. This ensures that each note has a distinct identifier, even if the title or content is the same. This is particularly important for editing or deleting notes since we can target individual notes without ambiguity.

## Project Setup

### 1. Clone the repository

```bash
git clone https://github.com/your-username/note-app.git
cd note-app
```
