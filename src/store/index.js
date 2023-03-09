import { legacy_createStore } from "redux";

const defaultState = {
  counter: 0,
  showCounter: true,
};

function counterReducer(state = defaultState, action) {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        counter: state.counter + 1,
      };
    case "DECREMENT":
      return {
        ...state,
        counter: state.counter - 1,
      };
    case "INCREASE": {
      // to increase by n
      return {
        ...state,
        counter: state.counter + action.n,
      };
    }
    case "TOGGLE": {
        return {
            ...state,
            showCounter: !state.showCounter
        }
    }
    case "RESET": {
      return defaultState;
    }
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
