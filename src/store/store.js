import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { appReducer } from "./slices/appSlice";

const rootReducers = combineReducers({
  app: appReducer,
});

export const store = configureStore({
  reducer: rootReducers,
});
