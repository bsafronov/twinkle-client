import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./userReducer/userSlice";
import themeReducer from "./themeReducer/themeSlice";

const rootReducer = combineReducers({
  user: userReducer,
  theme: themeReducer,
});

export default rootReducer;
