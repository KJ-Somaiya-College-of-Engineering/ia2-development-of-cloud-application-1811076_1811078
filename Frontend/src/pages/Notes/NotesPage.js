import React, { useState } from "react";
import Header from "../../components/Note/Header";
import Footer from "../../components/Footer/Footer";
import Note from "../../components/Note/Note";
import CreateArea from "../../components/Note/CreateArea";

import './Note.css';

const NotesPage = () => {
    const [notes, setNotes] = useState([]);
    
    const addNote = (newNote) => {
        setNotes(prevNotes => {
            return [...prevNotes, newNote];
        });
    } 

    const deleteNote = (id) => {
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
            <Footer /> 
        </div>
    );
}

export default NotesPage;