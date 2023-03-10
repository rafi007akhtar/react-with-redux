import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store";

import classes from "./Counter.module.css";

const N = 10;

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const showCounter = useSelector((state) => state.showCounter);
  const dispatchFn = useDispatch();

  const toggleCounterHandler = () => {
    // dispatchFn({ type: "TOGGLE" });
    dispatchFn(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>

      <button onClick={toggleCounterHandler}>Toggle Counter</button>

      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={() => dispatchFn(counterActions.increment())}>
          Increment
        </button>
        <button onClick={() => dispatchFn(counterActions.decrement())}>
          Decrement
        </button>
        <button onClick={() => dispatchFn(counterActions.increase({ n: N }))}>
          Increase by {N}
        </button>
      </div>
      <div>
        <button onClick={() => dispatchFn(counterActions.reset())}>
          Reset Counter
        </button>
      </div>
    </main>
  );
};

export default Counter;
