import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={handleClick}>Click</button>
      <div>
        <h2>{input}</h2>
        <input
          type="text"
          value={input}
          onChange={({ target }) => setInput(target.value)}
        />
      </div>
    </div>
  );
};
