const mongoose = require("mongoose");

const Note = mongoose.model(
    "Note",
    new mongoose.Schema({
        noteId: String,
        userId: String,
        title: String,
        content: String,
        isFavourite: Boolean,
        creationDate: Date
    })
);

module.exports = Note;