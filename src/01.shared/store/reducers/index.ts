import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./userReducer/userSlice";
import themeReducer from "./themeReducer/themeSlice";
import userWallReducer from "./userWallReducer/userWallSlice";

const rootReducer = combineReducers({
  user: userReducer,
  userWall: userWallReducer,
  theme: themeReducer,
});

export default rootReducer;
