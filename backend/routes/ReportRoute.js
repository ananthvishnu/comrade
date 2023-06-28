const express = require("express");
const {
  createReport,
  getAllReports,
  getReportById,
  updateReport,
  deleteReport
} = require("../controller/ReportController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
const router = express.Router();

// Create a new Note
router.post("/reports", isAuthenticatedUser, createReport);

// Get all blogs
router.get("/reports", getAllReports);

// Get a single blog by ID
router.get("/reports/:id", getReportById);

// Update a blog by ID
router.put("/reports/:id", isAuthenticatedUser, updateReport);

// Delete a blog by ID
router.delete("/reports/:id", isAuthenticatedUser, deleteReport);

module.exports = router;