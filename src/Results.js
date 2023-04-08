import React from "react";
import Meaning from "./Meaning";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <br />
        <h2>{props.results.word}</h2>
        <br />
        <div>
          {props.results.meanings.map(function (meaning, index) {
            return (
              <div key={index}>
                <Meaning meaning={meaning} />
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
//         <div>
//     {props.results.meanings.map(function (meaning, index) {
//       return meaning.definitions[0].definition;
//      })}
//     </div>
