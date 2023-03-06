import React, { useState } from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import Create from "./Create";

function App() {
    var [notes, setNotes] = useState([]);
    function addNote(newNote) {
        notes.push(newNote);
        setNotes([...notes])
    }
    function deleteNote(id, event) {
        const updatedNotes = notes.filter((item, index) => index !== id);
        setNotes(updatedNotes);
        event.preventDefault();
    }
    return <div>
        <Header />
        <Create onAdd = {addNote} />
        {notes.map((item, index) => {
            return <Note 
                title = {item.title}
                content = {item.content}
                onDelete = {deleteNote}
                key = {index}
                id = {index}
            />;
        })}
        <Footer />
    </div>;
}

export default App;