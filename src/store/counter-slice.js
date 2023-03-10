import { createSlice } from "@reduxjs/toolkit";

const defaultCounterState = {
  counter: 0,
  showCounter: true,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: defaultCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload.n;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
    reset(state) {
      Object.keys(state).forEach((key) => {
        state[key] = defaultCounterState[key];
      });
    },
  },
});

const counterActions = counterSlice.actions;

export { counterActions };
export default counterSlice.reducer;

// function counterReducer(state = defaultState, action) {
//   switch (action.type) {
//     case "INCREMENT":
//       return {
//         ...state,
//         counter: state.counter + 1,
//       };
//     case "DECREMENT":
//       return {
//         ...state,
//         counter: state.counter - 1,
//       };
//     case "INCREASE": {
//       // to increase by n
//       return {
//         ...state,
//         counter: state.counter + action.n,
//       };
//     }
//     case "TOGGLE": {
//       return {
//         ...state,
//         showCounter: !state.showCounter,
//       };
//     }
//     case "RESET": {
//       return defaultState;
//     }
//     default:
//       return state;
//   }
// }

// const store = legacy_createStore(counterReducer);

// function storeSubscription() {
//   const latestState = store.getState();
//   console.log("latestState:", latestState);
// }
// store.subscribe(storeSubscription);

// store.dispatch({ type: "INCREMENT" });
// store.dispatch({ type: "DECREMENT" });
