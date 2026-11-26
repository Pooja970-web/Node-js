const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const {
    createNote,
    getMyNotes,
    updateNote,
    deleteNote
} = require("../controllers/noteController");

const router = express.Router();

router.post("/", authMiddleware, createNote);
router.get("/", authMiddleware, getMyNotes);
router.put("/:id", authMiddleware, updateNote);
router.delete("/:id", authMiddleware, deleteNote);
module.exports = router;