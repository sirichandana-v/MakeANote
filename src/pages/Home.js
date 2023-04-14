import React, { useState } from "react";
import Navbar from "../components/Navbar";
import CreateNote from "../components/CreateNote";
import DisplayNote from "../components/DisplayNote";
import Card from "../components/Card";

function Home() {
  const [notes, setNotes] = useState([{ title: "Title", desc: "" }]);
  const [note, setNote] = useState({ title: "", desc: "" });

  const onCreateNote = (e) => {
    e.preventDefault();
    console.log(note);
    setNotes([...notes, note]);
    setNote({ title: "", desc: "" });
  };

  return (
    <div className="home">
      <Navbar />
      <CreateNote handleSubmit={onCreateNote} note={note} setNote={setNote} />
      <DisplayNote notes={notes} />
    </div>
  );
}

export default Home;
