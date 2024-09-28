import { useState } from "react";

function Test() {
  const [counter, setCounter] = useState(0);
  const clickHandler = () => {
    setCounter(prev=>prev + 1);
    setCounter(prev=>prev + 1);
    setCounter(prev=>prev + 1);
  };
  return (
    <div className="text-center py-9">
      <div>{counter}</div>
      <button onClick={clickHandler}>+</button>
    </div>
  );
}

export default Test;
