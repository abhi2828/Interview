import "./styles.css";
import { useEffect, useState } from "react";

export default function App() {
  const [counter, setCounter] = useState(0);
  const [startCounter, setStartCounter] = useState(false);
  const [reachLimit, setReachLimit] = useState(false);

  const handleCounter = (type) => {
    type === "start" ? setStartCounter(true) : setStartCounter(false);
  };

  useEffect(() => {
    // debugger;
    let test;
    if (startCounter) {
      if (counter !== 5) {
        test = setTimeout(() => {
          setCounter((e) => e + 1);
        });
      } else {
        setTimeout(() => {
          setCounter((e) => e - 1);
        });
      }
    }
    // return () => clearTimeout(test);
  }, [counter, startCounter]);

  useEffect(() => {
    if (counter === 5) {
      setReachLimit(true);
    } else {
      setReachLimit(false);
    }
  }, [counter]);

  console.log("counter", counter);
  console.log("startCounter", startCounter);
  console.log("reachLimit", reachLimit);
  return (
    <div className="App">
      <h1>Hello counter {counter}</h1>
      <button onClick={() => handleCounter("start")}>start</button>
      <button onClick={() => handleCounter("stop")}>stop</button>
    </div>
  );
}
