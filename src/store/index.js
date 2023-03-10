import { configureStore } from "@reduxjs/toolkit";
import counterReducer, { counterActions } from "./counter-slice";
import authReducer, {authActions} from "./auth-slice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  },
});

export { counterActions, authActions };
export default store;
