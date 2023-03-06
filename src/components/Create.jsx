import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import { Fab, Zoom } from "@mui/material";

function Create(props) {
    const [note, setNote] = useState({
      title: "",
      content: ""
    });
    const [isExtended, setExtended] = useState(false);
    function handleAdd(event) {
      props.onAdd(note);
      setNote({title: "", content: ""});
      setExtended(false);
      event.preventDefault();
    }
    function handleChange(event) {
      event.target.name === "title" ?
      setNote({title: event.target.value, content: note.content}) :
      setNote({title: note.title, content: event.target.value});
    }
    function handleClick () {
      setExtended(true);
    }
    return (
    <div>
      <form className="create-note">
        {isExtended && (<input 
          name="title" 
          placeholder="Title" 
          value={note.title} 
          onChange = {handleChange} />)}
        <textarea 
          name="content" 
          placeholder="Take a note..." 
          rows={isExtended ? "3" : "1"} 
          value={note.content}
          onClick = {handleClick} 
          onChange = {handleChange} />
        {isExtended && (<Zoom in = {true}>
          <Fab onClick={handleAdd}>
            <AddIcon />
          </Fab>
        </Zoom>)}
      </form>
    </div>
  );
}

export default Create;