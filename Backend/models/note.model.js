const mongoose = require("mongoose");

const Note = mongoose.model(
    "Note",
    new mongoose.Schema({
        title: String,
        content: String,
        isFavourite: Boolean,
        creationDate: Date
    })
);

module.exports = Note;