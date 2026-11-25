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

module.exports = { createNote };