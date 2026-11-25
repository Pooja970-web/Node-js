const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const { createNote } = require("../controllers/noteController");

const router = express.Router();

router.post("/", authMiddleware, createNote);

module.exports = router;