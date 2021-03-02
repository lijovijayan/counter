import React, { useState } from "react";
import "./index.css";

function Count() {
  let [count, setCount] = useState(0);

  let incCount = () => {
    setCount(count + 1);
  };

  let decCount = () => {
    setCount(count - 1);
  };

  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  return (
    <div className="Index">
      <h1 style={{ color: getRandomColor() }} className="Counter">
        {count}{" "}
      </h1>
      <button className="Inc-button" onClick={incCount}>
        +
      </button>
      <button className="Dec-button" onClick={decCount}>
        -
      </button>
    </div>
  );
}

export { Count };
