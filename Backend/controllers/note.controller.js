const { nanoid } = require('nanoid');
const db = require("../models");
const Note = db.note;
const filterNote = ({ noteId, userId, title, content, isFavourite, creationDate}) => ({ noteId, userId, title, content, isFavourite, creationDate});

exports.createNote = (req, res) => {
    const email = req.body.email;
    const noteContent = req.body.noteContent;
    const noteTitle = req.body.noteTitle;
    const timestamp = req.body.timestamp;
    const noteId =  nanoid(10);

    const newNote = new Note({
        noteId,
        userId: email,
        title: noteTitle,
        content: noteContent,
        isFavourite: false,
        creationDate: timestamp
    })

    newNote.save(err => {
        if (err) {
            res.status(500).send({
                message: "Something went wrong at our side!",
                error: err
            });
            return;
        }
        res.status(200).send({
            message: "Note was saved successfully!"
        });
    });
};

exports.getAllNotes = (req, res) => {
    const userId = req.params.userId;

    Note.find({userId}, function(err, docs){
        if (err) {
            res.status(500).send({
                message: "Something went wrong at our side!",
                error: err
            });
            return;
        }
        const notes = [];
        for(var i=0; i<docs.length; i++){
            notes.push(filterNote(docs[i]));
        }
        res.status(200).send({
            notes:  notes,
            count:  notes.length,
            message: "Notes fetched!"
        });
    })
};

exports.getOneNote = (req, res) => {
    const email = req.body.email;
    const noteId =  req.params.noteId;

    Note.findOne({noteId}, function(err, note){
        if (err) {
            res.status(500).send({
                message: "Something went wrong at our side!",
                error: err
            });
            return;
        }
        if(!note){
            res.status(404).send({
                message:"Note Not Found!",
                error: "Note not found"
                
            });
            return;
        }
        res.status(200).send({
            message: "Note found!",
            note:filterNote(note)
        });
    })
};

exports.editNote = (req, res) => {
    const email = req.body.email;
    const noteContent = req.body.noteContent;
    const noteTitle = req.body.noteTitle;
    const timeStamp = req.body.timeStamp;
    const noteId =  req.params.noteId;
    
    const newNote = new Note({
        noteId,
        userId: email,
        title: noteTitle,
        content: noteContent,
        isFavourite: false,
        creationDate: timeStamp
    })

    newNote.save(err => {
        if (err) {
            res.status(500).send({
                message: "Something went wrong at our side!",
                error: err
            });
            return;
        }
        res.send({
            message: "Note was saved successfully!"
        });
    });
};

exports.updateFavourite = (req, res) => {
    const email = req.body.email;
    const noteId =  req.params.noteId;
    const newIsFavourite =  req.body.isFavourite;

    Note.findOneAndUpdate({userId:email, noteId}, {isFavourite:newIsFavourite}, function(err, doc, resp){
        if (err) {
            res.status(500).send({
                message: "Something went wrong at our side!",
                error: err
            });
            return;
        }
        res.status(200).send({
            message: "Note was updated!"
        });
    })

};

exports.deleteNote = (req, res) => {
    const email = req.body.email;
    const noteId =  req.params.noteId;

    Note.findOneAndDelete({noteId}, function(err, deletedNote) {
        if (err) {
            res.status(500).send({
                message: "Something went wrong at our side!",
                error: err
            });
            return;
        }
        if(!deletedNote){
            res.status(404).send({
                message:"Note Not Found!",
                error: "note note found"
            });
            return;
        }
        res.status(200).send({
            message: "Note was deleted successfully!"
        });
    });
};
