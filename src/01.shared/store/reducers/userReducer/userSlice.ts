import { IToken } from "@/01.shared/services/AuthService/AuthService.interface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUserState } from "./user.interface";

const initialState: IUserState = {
  isAuth: false,
  profile: null,
  test: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login(state, action: PayloadAction<IToken>) {
      state.isAuth = true;
      state.profile = action.payload.user;
    },
    setProfileData(state, action) {
      state.test = action.payload;
    },
  },
});

export default userSlice.reducer;
