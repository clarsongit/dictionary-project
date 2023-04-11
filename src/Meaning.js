import React from "react";
import "./Meaning.css";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  // console.log(props.meaning);
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        if (index < 1) {
          return (
            <div key={index}>
              <p>
                {`${index + 1}. `}
                {definition.definition}
                <br />
                <em className="examples">{definition.example}</em>
                <br />
                <Synonyms synonyms={definition.synonyms} />
              </p>
            </div>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
}
