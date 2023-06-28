const Note = require("../models/NoteSchema");
const ErrorHandler = require("../utils/ErrorHandler.js");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

// Create a new note
exports.createNote = catchAsyncErrors(async (req, res, next) => {
  const { date, title, content } = req.body;

  if (!title || !content || !date) {
    return next(new ErrorHandler("Please provide a title and content", 400));
  }

  const note = await Note.create({
    date,
    title,
    content,
    user: req.user._id, // Assuming you have user authentication implemented
  });

  res.status(201).json(note);
});

// Get all notes
exports.getAllNotes = catchAsyncErrors(async (req, res, next) => {
  const notes = await Note.find(); // Assuming you have user authentication implemented

  res.status(200).json(notes);
});

// Get a note by ID
exports.getNoteById = catchAsyncErrors(async (req, res, next) => {
  const note = await Note.findById(req.params.id);

  if (!note) {
    return next(new ErrorHandler("Note not found", 404));
  }

  res.status(200).json(note);
});

// Update a note
exports.updateNote = catchAsyncErrors(async (req, res, next) => {
  const { title, content, date } = req.body;

  if (!title || !content || !date) {
    return next(new ErrorHandler("Please provide a title and content", 400));
  }

  const note = await Note.findByIdAndUpdate(
    req.params.id,
    { date,title, content },
    { new: true }
  );

  if (!note) {
    return next(new ErrorHandler("Note not found", 404));
  }

  res.status(200).json(note);
});

// Delete a note
exports.deleteNote = catchAsyncErrors(async (req, res, next) => {
  const note = await Note.findByIdAndDelete(req.params.id);

  if (!note) {
    return next(new ErrorHandler("Note not found", 404));
  }

  res.status(200).json({ message: "Note deleted" });
});