import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <div className="card">
      <div className="card__header">
        <h3>{props.title}</h3>
      </div>
      <div className="card__body">{props.desc}</div>
    </div>
  );
}

export default Card;
