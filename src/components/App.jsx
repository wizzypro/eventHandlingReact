import React, { useState } from "react";

function App() {
  const [mouseOverState, setMouseOverState] = useState(false);
  const [name, setName] = useState("");
  const [displayName, setDisplayName] = useState("");

  function mouseOverHandler() {
    setMouseOverState(true);
  }

  function mouseOutHandler() {
    setMouseOverState(false);
  }

  function formHandler(event) {
    setName(event.target.value);
  }

  function submitHandler() {
    setDisplayName(name);
  }
  return (
    <div className="container">
      <h1>Hello {displayName}</h1>
      <input
        type="text"
        placeholder="What's your name?"
        value={name}
        onChange={formHandler}
      />
      <button
        onMouseOver={mouseOverHandler}
        onMouseOut={mouseOutHandler}
        style={{ backgroundColor: mouseOverState ? "black" : "white" }}
        type="submit"
        onClick={submitHandler}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
