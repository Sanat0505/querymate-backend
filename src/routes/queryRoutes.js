const express = require("express");
const {
  submitQuery,
  getUserQueries,
} = require("../controllers/queryController");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

// Submit a Query
router.post("/submitquery", authMiddleware, submitQuery);

// Get All Queries of a User
router.get("/getuserqueries", authMiddleware, getUserQueries);

module.exports = router;
