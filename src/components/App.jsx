import React, { useState } from "react";

function App() {
  const [mouseOverState, setMouseOverState] = useState(false);

  function mouseOverHandler() {
    setMouseOverState(true);
  }

  function mouseOutHandler() {
    setMouseOverState(false);
  }
  return (
    <div className="container">
      <h1>Hello</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        onMouseOver={mouseOverHandler}
        onMouseOut={mouseOutHandler}
        style={{ backgroundColor: mouseOverState ? "black" : "white" }}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
