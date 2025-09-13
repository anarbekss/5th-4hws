import { useCallback, useState } from "react";
import { ChildButton } from "./ChildButton";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={handleClick}>Click</button>

      <ChildButton onClick={handleClick} label={"Child Button"} />
    </div>
  );
};
