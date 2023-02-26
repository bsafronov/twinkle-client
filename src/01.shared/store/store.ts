import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { createWrapper, MakeStore } from "next-redux-wrapper";
import rootReducer from "./reducers";

const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type AppState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;

export const wrapper = createWrapper<AppStore>(setupStore);

export default setupStore;
