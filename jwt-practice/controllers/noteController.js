const Note = require("../models/Note");

// CREATE
const createNote = async (req, res) => {
    try {
        const { title, content } = req.body;

        if (!title) {
            return res.status(400).json({
                message: "Title is required"
            });
        } 

        const note = await Note.create({
            title,
            content,
            user: req.user.id
        });

        res.status(201).json({
            message: "Note created",
            note
        });

    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            message: "Server error"
        });
    }
};

// READ (Get only logged-in user's notes)
const getMyNotes = async (req, res) => {
    try {
        const notes = await Note.find({ user: req.user.id }).sort({ createdAt: -1 });

        res.status(200).json({
            message: "Notes fetched successfully",
            count: notes.length,
            notes
        });

    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            message: "Server error"
        });
    }
};
// 3. UPDATE (Only owner can update)
const updateNote = async (req, res) => {
    try {
        const { title, content } = req.body;

        // Note dhoondhein jo is ID ka ho AUR is user ka ho
        const updatedNote = await Note.findOneAndUpdate(
            { _id: req.params.id, user: req.user.id },
            { title, content },
            { new: true, runValidators: true }
        );

        if (!updatedNote) {
            return res.status(404).json({
                message: "Note not found or unauthorized"
            });
        }

        res.status(200).json({
            message: "Note updated successfully",
            note: updatedNote
        });

    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            message: "Server error"
        });
    }
};

// 4. DELETE (Only owner can delete)
const deleteNote = async (req, res) => {
    try {
        const deletedNote = await Note.findOneAndDelete({
            _id: req.params.id,
            user: req.user.id
        });

        if (!deletedNote) {
            return res.status(404).json({
                message: "Note not found or unauthorized"
            });
        }

        res.status(200).json({
            message: "Note deleted successfully"
        });

    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            message: "Server error"
        });
    }
};

module.exports = { createNote, getMyNotes, updateNote, deleteNote };