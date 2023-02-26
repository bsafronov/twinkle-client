import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserWallState } from "./userWall.interface";

const initialState: UserWallState = {
  id: null,
  owner: null,
  posts: [],
};

export const userWallSlice = createSlice({
  name: "userWall",
  initialState,
  reducers: {
    setUserWall(state, action: PayloadAction<UserWallState>) {
      state.id = action.payload.id;
      state.owner = action.payload.owner;
      state.posts = action.payload.posts;
    },
  },
});

export default userWallSlice.reducer;
