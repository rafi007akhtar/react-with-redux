import { legacy_createStore } from "redux";

const defaultState = { counter: 0 };

function counterReducer(state = defaultState, action) {
  switch (action.type) {
    case "INCREMENT":
      return {
        counter: state.counter + 1,
      };
    case "DECREMENT":
      return {
        counter: state.counter - 1,
      };
    default:
      return state;
  }
}

const store = legacy_createStore(counterReducer);

// function storeSubscription() {
//   const latestState = store.getState();
//   console.log("latestState:", latestState);
// }
// store.subscribe(storeSubscription);

// store.dispatch({ type: "INCREMENT" });
// store.dispatch({ type: "DECREMENT" });

export default store;
