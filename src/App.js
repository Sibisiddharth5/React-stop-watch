import React, { useState, useRef } from 'react';
import './index.css';

function App() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  const startStopwatch = () => {
    if (!isRunning) {
      setIsRunning(true);
      intervalRef.current = setInterval(() => {
        setTime(prevTime => prevTime + 10);
      }, 10);
    }
  };

  const stopStopwatch = () => {
    setIsRunning(false);
    clearInterval(intervalRef.current);
  };

  const resetStopwatch = () => {
    setIsRunning(false);
    clearInterval(intervalRef.current);
    setTime(0);
  };

  const formatTime = (ms) => {
    const minutes = String(Math.floor(ms / 60000)).padStart(2, '0');
    const seconds = String(Math.floor((ms % 60000) / 1000)).padStart(2, '0');
    const milliseconds = String(Math.floor((ms % 1000) / 10)).padStart(2, '0');
    return `${minutes}:${seconds}:${milliseconds}`;
  };

  return (
    <div className="stopwatch-container">
      <h1>⏱️ Stopwatch</h1>
      <div className="time">{formatTime(time)}</div>
      <div className="buttons">
        <button onClick={startStopwatch} disabled={isRunning}>Start</button>
        <button onClick={stopStopwatch} disabled={!isRunning}>Stop</button>
        <button onClick={resetStopwatch}>Reset</button>
      </div>
    </div>
  );
}

export default App;
