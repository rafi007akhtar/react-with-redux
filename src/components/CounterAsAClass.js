import { Component } from "react";
import { connect } from "react-redux";

import classes from "./Counter.module.css";

class Counter extends Component {
  toggleCounterHandler = () => {};

  render() {
    return (
      <main className={classes.counter}>
        <h1>Redux Counter</h1>
        <div className={classes.value}>{this.props.counter}</div>
        <div>
          <button onClick={this.props.increment.bind(this)}>Increment</button>
          <button onClick={this.props.decrement.bind(this)}>Decrement</button>
        </div>
        <button onClick={this.toggleCounterHandler.bind(this)}>Toggle Counter</button>
      </main>
    );
  }
}

function mapStateToProps(state) {
  return { counter: state.counter };
}

function mapDispatchToProps(dispatchFn) {
  return {
    increment: () => dispatchFn({ type: "INCREMENT" }),
    decrement: () => dispatchFn({ type: "DECREMENT" }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
