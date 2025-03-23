import userEvent from "@testing-library/user-event";
import React, {useState} from "react";


function App() {
  const [count, setCount] = useState(0);
  
  // click function, increments count
  const handleClick = () => {
    setCount(count + 1);
  }

  const handleReset = () => {
    setCount(0);
  }

  return (
    <div>
      <h1>Click Counter</h1>
      <p>You clicked {count} times!</p>
      <button onClick={handleClick}>Click Here</button>
      <button onClick={handleReset}>reset</button>
    </div>
  );
}

export default App;
