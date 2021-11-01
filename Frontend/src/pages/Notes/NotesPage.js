import React, { useState } from "react";
import Header from "../../components/Note/Header";
import Footer from "../../components/Footer/Footer";
import Note from "../../components/Note/Note";
import CreateArea from "../../components/Note/CreateArea";
import { useHistory } from 'react-router-dom';

import './Note.css';
import Modal from "../../utils/Modal";

const NotesPage = () => {
    const history = useHistory();
    
    const [notes, setNotes] = useState([]);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const redirectOnLogout = (e) => {
        e.preventDefault();
        localStorage.removeItem("NOCTokenDetails");    
        history.go("/login");
    }

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
            <Header setIsModalVisible={setIsModalVisible} />
            <CreateArea onAdd={addNote} />
            {isModalVisible 
                &&
                <div className="modalContainer">
                    <Modal setIsModalVisible={setIsModalVisible} redirectOnLogout={redirectOnLogout}/>
                </div>
                }
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