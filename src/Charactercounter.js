import React, { useState } from "react";

function CharacterCounter() {
  const [inputvalue, setInputvalue] = useState("");

  const handleChange = (e) => {
    setInputvalue(e.target.value);
  };

  return (
    <div>
      <textarea value={inputvalue} onChange={handleChange}></textarea>
      <p>Characters: {inputvalue.length}</p>
    </div>
  );
}
export default CharacterCounter;
