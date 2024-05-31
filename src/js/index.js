//import react into the bundle
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import SimpleCounter from "./component/home";
// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components

function CounterApp() {
  const [counter, setCounter] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isRunning) {
        setCounter((prevCounter) => prevCounter + 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning]);

  const handlePause = () => setIsRunning(false);
  const handleResume = () => setIsRunning(true);
  const handleReset = () => {
    setCounter(0);
    setIsRunning(false);
  };

  const totalSeconds = counter;
  const hours = Math.floor(totalSeconds / 3600);
  const remainingSeconds = totalSeconds % 3600;
  const minutes = Math.floor(remainingSeconds / 60);
  const seconds = remainingSeconds % 60;

  const tHours = Math.floor(hours / 10);
  const uHours = hours % 10;
  const tMinutes = Math.floor(minutes / 10);
  const uMinutes = minutes % 10;
  const tSeconds = Math.floor(seconds / 10);
  const uSeconds = seconds % 10;

  return (
    <div>
      <SimpleCounter
        tensHour={tHours}
        unitsHour={uHours}
        tensMinutes={tMinutes}
        unitsMinutes={uMinutes}
        tensSeconds={tSeconds}
        unitsSeconds={uSeconds}
      />
      <div className="div-controls" id="div-controls">
        <button id="controls" onClick={handlePause}>
          Pause
        </button>
        <button id="controls" onClick={handleResume}>
          Start
        </button>
        <button id="controls" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
}

ReactDOM.render(<CounterApp />, document.querySelector("#app"));
