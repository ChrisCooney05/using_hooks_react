import React, { useState, useEffect } from "react";
import { options } from "../constants";

const Counter = () => {
  const [count, updateCount] = useState(0);
  const [name, updateName] = useState("");

  const addOne = () => {
    updateCount(count + 1);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://api.github.com/users/ChrisCooney05",
        options
      );
      const data = await response.json();
      updateName(data.name);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>
        {name} has counted {count} many times
      </h1>
      <br />
      <button onClick={addOne}>Add One</button>
    </div>
  );
};
export default Counter;
