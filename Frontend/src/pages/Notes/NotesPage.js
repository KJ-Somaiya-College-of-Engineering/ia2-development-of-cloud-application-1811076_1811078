import React, { useState } from "react";
import Header from "../../components/Note/Header";
import Footer from "../../components/Footer/Footer";
import Note from "../../components/Note/Note";
import CreateArea from "../../components/Note/CreateArea";
// import SnackBar from 'my-react-snackbar'; 

import './Note.css';

// const sbType = {
//     WARNING: "warning",
//     ERROR: "error",
//     SUCCESS: "success",
//     INFO: "info"
// }

const NotesPage = () => {
    const [notes, setNotes] = useState([]);
    
    // const initialSnackBarProps = {
    //     open: true,
    //     message:"",
    //     position:'bottom-center',
    //     type:sbType.INFO,
    //     yesLabel:'Ok',
    //     timeout: 3
    // }
    // const [sbProps, setSbProps] = useState(initialSnackBarProps);

    function addNote(newNote) {
        // console.log(sbProps);
        // setSbProps((rest)=>{
        //     console.log("rest:\t",rest);
        //     return {open: true, message:"Note added", type:sbType.SUCCESS, ...rest};
        // })
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
        <Footer /> 
        </div>
    );
}

export default NotesPage;