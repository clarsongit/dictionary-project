import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");
  function search(event) {
    event.preventDefault();
    return null;
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
    console.log(keyword);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" autoFocus={true} onChange={handleKeywordChange} />
        <input type="submit" value="search" />
      </form>
    </div>
  );
}
