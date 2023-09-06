import React, { useState, useEffect } from 'react';

function Stopwatch() {
  const [count, setCount] = useState(1);
  const [isRunning, setIsRunning] = useState(false);
  const [isIncrementing, setIsIncrementing] = useState(true);

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        if (isIncrementing) {
          setCount((prevCount) => {
            if (prevCount === 5) {
              setIsIncrementing(false);
              return 4;
            } else {
              return prevCount + 1;
            }
          });
        } else {
          setCount((prevCount) => {
            if (prevCount === 1) {
              setIsIncrementing(true);
              return 2;
            } else {
              return prevCount - 1;
            }
          });
        }
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRunning, isIncrementing]);

  const startTimer = () => {
    setIsRunning(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  return (
    <div>
      <h1>Stopwatch</h1>
      <div>
        <p>Count: {count}</p>
      </div>
      <div>
        {isRunning ? (
          <button onClick={stopTimer}>Stop</button>
        ) : (
          <button onClick={startTimer}>Start</button>
        )}
      </div>
    </div>
  );
}

export default Stopwatch;
