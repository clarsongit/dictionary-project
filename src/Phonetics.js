import React from "react";
import "./Phonetics.css";

export default function Phonetics(props) {
  console.log(props.phonetics);

  if (props.phonetics.audio) {
    return (
      <div className="Phonetics">
        <a
          href={props.phonetics.audio}
          target="_blank"
          rel="noopener noreferrer"
        >
          Listen
        </a>
        <span className="text">{props.phonetics.text} </span>
      </div>
    );
  } else {
    return null;
  }
}