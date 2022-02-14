import React, { useState } from "react";

function App() {
  const [btnBG, setBtnBG] = useState({ backgroundColor: "white" });

  function mouseOverHandler() {
    setBtnBG({ backgroundColor: "black" });
  }

  function mouseOutHandler() {
    setBtnBG({ backgroundColor: "white" });
  }
  return (
    <div className="container">
      <h1>Hello</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        onMouseOver={mouseOverHandler}
        onMouseOut={mouseOutHandler}
        style={btnBG}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
