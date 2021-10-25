import React, { useState } from "react";

const BLANK_NOTE = {
  title: "",
  content: ""
};

const CreateArea = (props) => {
  const [note, setNote] = useState(BLANK_NOTE);
  const [errorVisibility, setErrorVisibility] = useState(false);

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

  const submitNote = (event) => {
    event.preventDefault();
    if(note.title.trim() === "" || note.content.trim() === ""){
      setErrorVisibility(true);
      return;
    }
    props.onAdd(note);
    setNote(BLANK_NOTE);
  }

  return (
    <div>
      <form>
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
        <button onClick={submitNote}>Add</button>
      </form>
      
      <div className="errorContainer" style={{visibility:errorVisibility?"visible":"hidden"}}>
        <h4 className="errorMessage">Note title and content cannot be empty!</h4>
      </div>
    </div>
  );
}

export default CreateArea;
