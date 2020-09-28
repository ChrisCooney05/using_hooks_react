import React, { useState } from "react";

const Counter = () => {
  const [count, updateCount] = useState(0);

  const addOne = () => {
    updateCount(count + 1);
  };

  return (
    <div>
      <h1>{count}</h1>
      <br />
      <button onClick={addOne}>Add One</button>
    </div>
  );
};
export default Counter;
