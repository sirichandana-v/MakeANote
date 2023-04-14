import React from "react";
import "./CreateNote.css";
import { useState } from "react";

function CreateNote({ handleSubmit, note, setNote }) {
  return (
    <div className="createNote">
      <div className="createNote__form">
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            name="createNote__title"
            placeholder="Title..."
            value={note.title}
            type="text"
            onChange={(e) => setNote({ ...note, title: e.target.value })}
          />
          <textarea
            name="createNote__textArea"
            id=""
            rows="13"
            placeholder="Start Writing..."
            value={note.desc}
            onChange={(e) => {
              setNote({ ...note, desc: e.target.value });
            }}
          ></textarea>
          <button className="createNote__btn">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default CreateNote;
