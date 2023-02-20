import { createSlice } from "@reduxjs/toolkit";

interface userStateProps {
  name: string;
  age: number;
  isAuth: boolean;
}

const initialState: userStateProps = {
  isAuth: false,
  name: "Bogdan",
  age: 22,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login(state) {
      state.isAuth = true;
    },
  },
});

export default userSlice.reducer;
