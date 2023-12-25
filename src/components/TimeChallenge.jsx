import React, { useState, useRef } from "react";
import ResultModal from "./ResultModal";

const TimeChallenge = ({ title, targetTime }) => {
  const timer = useRef();
  const dialog = useRef();

  const [timerExpired, setTimerExpired] = useState(false);
  const [timerStarted, setTimerStarted] = useState(false);

  function handleStart() {
    timer.current = setTimeout(() => {
      setTimerExpired(true);
      dialog.current.showModal();
    }, targetTime * 1000);

    setTimerStarted(true);
  }

  function handleStop() {
    // ? How do we get access to the startTimer Function in this function?
    // * and that's where a ref can help us.
    clearTimeout(timer.current);
    setTimerStarted(false);
    setTimerExpired(false);
  }

  return (
    <>
      <ResultModal ref={dialog} targetTime={targetTime} result="Lost" />

      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerStarted ? handleStop : handleStart}>
            {timerStarted ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timerStarted ? "active" : undefined}>
          {" "}
          {timerStarted ? "Time is running..." : "Timer InActive"}{" "}
        </p>
      </section>
    </>
  );
};

export default TimeChallenge;
