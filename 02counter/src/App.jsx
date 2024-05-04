import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(8);

  // let counter = 8;

  const addValue = function () {
    // counter += 1;
    setCounter(counter + 1);
  };

  const removeValue = function () {
    setCounter(counter - 1);
  };

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>counter value: {counter}</h2>

      <button onClick={addValue}>add value {counter}</button>
      <br />
      <button onClick={removeValue}>remove value {counter}</button>
      <p>footer: {counter}</p>
    </>
  );
}

export default App;