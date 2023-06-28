const express = require("express");
const {
  createNote,
  getAllNotes,
  getNoteById,
  updateNote,
  deleteNote,
} = require("../controller/NoteController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
const router = express.Router();

// Create a new Note
router.post("/notes", isAuthenticatedUser, createNote);

// Get all blogs
router.get("/notes", getAllNotes);

// Get a single blog by ID
router.get("/notes/:id", getNoteById);

// Update a blog by ID
router.put("/notes/:id", isAuthenticatedUser, updateNote);

// Delete a blog by ID
router.delete("/notes/:id", isAuthenticatedUser, deleteNote);

module.exports = router;