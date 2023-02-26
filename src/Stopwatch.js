import React, { useState, useRef } from "react";
import "./App.css";

const Stopwatch = () => {
  const [timer, setTimer] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isReset, setIsReset] = useState(false);
  const [isResume, setIsResume] = useState(false);
  const countRef = useRef(null);

  const handleStart = () => {
    setIsActive(true);
    setIsReset(true);
    setIsResume(true);
    countRef.current = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
  };

  const handlePause = () => {
    setIsReset(false);
    setIsActive(false);
    setIsResume(true);
    clearInterval(countRef.current);
  };

  const handleReset = () => {
    setIsResume(false);
    clearInterval(countRef.current);
    setIsActive(false);
    setTimer(0);
  };

  const formatTime = () => {
    const getSeconds = `0${timer % 60}`.slice(-2);
    const minutes = `${Math.floor(timer / 60)}`;
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(timer / 3600)}`.slice(-2);
    return `${getHours} : ${getMinutes} : ${getSeconds}`;
  };

  return (
    <div className="stopwatch-container">
      <div className="header"></div>
      <div className="body">
        <h3>React Stopwatch</h3>
        <p>{formatTime()}</p>
        <div>
          {isActive === false ? (
            <button className="btn" onClick={handleStart}>
              {isResume === false ? "Start" : "Resume"}
            </button>
          ) : (
            <button className="btn" onClick={handlePause}>
              Pause
            </button>
          )}
          <button
            className="btn"
            onClick={handleReset}
            disabled={isReset === false ? false : true}
          >
            Reset
          </button>
        </div>
      </div>
      <div className="footer"></div>
    </div>
  );
};

export default Stopwatch;
