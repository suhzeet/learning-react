import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(8);

  // let counter = 8;

  const addValue = function () {
    if (counter + 1 > 20) {
      alert("Limit Exceeded");
    } else {
      setCounter(counter + 1);
    }
    // counter += 1;
  };

  const removeValue = function () {
    if (counter - 1 < 0) {
      alert("Value cannot be negative");
    } else {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <h1>Counter Project</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>add value</button>
      <br />
      <button onClick={removeValue}>remove value</button>
    </>
  );
}

export default App;
