import React, { useState } from "react";
import Header from "../../components/Note/Header";
import Footer from "../../components/Footer/Footer";
import Note from "../../components/Note/Note";
import CreateArea from "../../components/Note/CreateArea";
import SignIn from "../../components/Login/Login";

function Notes() {
    const [notes, setNotes] = useState([]);

    function addNote(newNote) {
        setNotes(prevNotes => {
            return [...prevNotes, newNote];
        });
    }

    function deleteNote(id) {
        setNotes(prevNotes => {
            return prevNotes.filter((noteItem, index) => {
                return index !== id;
            });
        });
    }

    return (
        <div>
        <Header />
        <CreateArea onAdd={addNote} />
        {notes.map((noteItem, index) => {
            return (
            <Note
                key={index}
                id={index}
                title={noteItem.title}
                content={noteItem.content}
                onDelete={deleteNote}
            />
            );
        })}
        <SignIn/>
        <Footer />
        </div>
    );
}

export default Notes;