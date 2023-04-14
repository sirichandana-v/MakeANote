import React from "react";
import Card from "./Card";
import "./DisplayNote.css";

function DisplayNote({ notes }) {
  return (
    <div className="displayNote">
      {notes.map((note, index) => {
        return <Card key={note.index} title={note.title} desc={note.desc} />;
      })}
    </div>
  );
}

export default DisplayNote;
