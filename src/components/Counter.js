import { useSelector, useDispatch } from "react-redux";

import classes from "./Counter.module.css";

const N = 10;

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const dispatchFn = useDispatch();

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={() => dispatchFn({ type: "INCREMENT" })}>
          Increment
        </button>
        <button onClick={() => dispatchFn({ type: "DECREMENT" })}>
          Decrement
        </button>
        <button onClick={() => dispatchFn({ type: "INCREASE", n: N })}>
          Increase by { N }
        </button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
