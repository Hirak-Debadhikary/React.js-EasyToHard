import React, { useState } from "react";

const Counter2ndProcess = () => {
  const [count, SetCount] = useState(0);

  const handleInc = () => {
    SetCount(count + 1);
  };

  const handleDec = () => {
    SetCount(count - 1);
  };

  const handleReset = () => {
    SetCount(0);
  };

  return (
    <div>
      <h1>React Counter App Second Process</h1>
      <div>
        <h3>Count : {count}</h3>

        <button onClick={handleInc}>Increment</button>
        <button onClick={handleDec}>Decrement</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default Counter2ndProcess;
