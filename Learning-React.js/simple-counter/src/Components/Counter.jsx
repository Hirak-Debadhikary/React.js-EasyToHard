import React, { useState } from "react";

const Counter = () => {
  const [count, SetCount] = useState(0);

  const handleReset = () => {
    SetCount(0);
  };

  return (
    <div className="counter-app">
        <h1>React Counter App First Process</h1>
      <div className="count">
        <h2>Counter: {count}</h2>
      </div>
      <div className="buttons">
        <button onClick={() => SetCount(count + 1)}>Increment+</button>
        <button onClick={() => SetCount(count - 1)}>Decrement-</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};
export default Counter;
