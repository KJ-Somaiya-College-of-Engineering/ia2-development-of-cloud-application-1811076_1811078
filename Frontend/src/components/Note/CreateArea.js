import React, { useState, useContext } from "react";
import axios from 'axios';
import {API_BASE_ROUTE, REQUEST_HEADERS} from '../../config/serverConfig';
import UserProvider from "../../context/user.provider";

const BLANK_NOTE = {
  title: "",
  content: ""
};

const CreateArea = (props) => {
  const [note, setNote] = useState(BLANK_NOTE);
  const [errorVisibility, setErrorVisibility] = useState(false);
  const userData = useContext(UserProvider.context);

  const handleChange = (event) => {
    const { name, value } = event.target;
    if(errorVisibility) setErrorVisibility(false)

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  const handleOnKeyDown = (event) => {
    if(event.keyCode===13 && event.ctrlKey){
      submitNote(event);
    }
  }

  const addNoteToDB = async(note) =>{
    const newNote = {
      email: userData.email,
      noteTitle: note.title,
      noteContent: note.content,
      timestamp: new Date(),
    }
    const response = await axios.post(`${API_BASE_ROUTE}/note/new`, newNote, {headers:{'x-access-token':userData.accessToken, ...REQUEST_HEADERS}});
    console.log(response.status);
  }


  const submitNote = async(event) => {
    event.preventDefault();
    if(note.title.trim() === "" || note.content.trim() === ""){
      setErrorVisibility(true);
      return;
    }
    try{
      await addNoteToDB(note);
      setNote(BLANK_NOTE);
      props.refreshNotes(userData.email, userData.accessToken);
    }catch(err){
      console.log(err.response);
    }
  }

  return (
    <div>
      <form className="notesForm">
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
        <textarea
          name="content"
          onChange={handleChange}
          onKeyDown={handleOnKeyDown}
          value={note.content}
          placeholder="Take a note..."
          rows="3"
        />
        <button className="addbutton" onClick={submitNote}>Add</button>
      </form>
      
      <div className="errorContainer" style={{visibility:errorVisibility?"visible":"hidden"}}>
        <h4 className="errorMessage">Note title and content cannot be empty!</h4>
      </div>
    </div>
  );
}

export default CreateArea;
