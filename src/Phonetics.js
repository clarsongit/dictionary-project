import React from "react";
import "./Phonetics.css";

export default function Phonetics(props) {
  if (props.phonetics.audio) {
    return (
      <div className="Phonetics">
        <a
          href={props.phonetics.audio}
          target="_blank"
          rel="noopener noreferrer"
        >
          Listen <i class="fa-solid fa-volume-high ms-1"></i>
        </a>
        <span className="text">{props.phonetics.text} </span>
      </div>
    );
  } else {
    return null;
  }
}
