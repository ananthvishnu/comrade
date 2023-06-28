const Report = require("../models/ReportSchema");
const ErrorHandler = require("../utils/ErrorHandler.js");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

// Create a new report --Customer
exports.createReport = catchAsyncErrors(async (req, res, next) => {
  const { name, subject, email, message } = req.body;

  if (!name || !subject || !email || !message) {
    return next(new ErrorHandler("Please provide a title and content", 400));
  }

  const report = await Report.create({
    name,
    subject,
    email,
    message,
    user: req.user._id, // Assuming you have user authentication implemented
  });

  res.status(201).json(report);
});

// Get all reports --Admin-side
exports.getAllReports = catchAsyncErrors(async (req, res, next) => {
  const reports = await Report.find(); // Assuming you have user authentication implemented

  res.status(200).json(reports);
});

// Get a report by ID --Admin-side
exports.getReportById = catchAsyncErrors(async (req, res, next) => {
  const report = await Report.findById(req.params.id);

  if (!report) {
    return next(new ErrorHandler("Report not found", 404));
  }

  res.status(200).json(report);
});

// Update a report --Client
exports.updateReport = catchAsyncErrors(async (req, res, next) => {
  const { name, subject, email, message } = req.body;

  if (!name || !subject || !email || !message) {
    return next(new ErrorHandler("Please provide a title and content", 400));
  }

  const report = await Report.findByIdAndUpdate(
    req.params.id,
    { name, subject, email, message },
    { new: true }
  );

  if (!report) {
    return next(new ErrorHandler("Report not found", 404));
  }

  res.status(200).json(report);
});

// Delete a note
exports.deleteReport = catchAsyncErrors(async (req, res, next) => {
  const report = await Report.findByIdAndDelete(req.params.id);

  if (!report) {
    return next(new ErrorHandler("Report not found", 404));
  }

  res.status(200).json({ message: "Report deleted" });
});
