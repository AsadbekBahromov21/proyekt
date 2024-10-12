import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  token: localStorage.getItem("token" || null),
  user: null,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    sigIn: (state, action) => {
      state.token = action.payload;
      console.log(action.payload);

      localStorage.setItem("token", action.payload);
    },
    signOut: (state) => {
      state.token = null;
      localStorage.removeItem("token");
    },
  },
});
export const { sigIn, signOut, setUser } = authSlice.actions;
export default authSlice.reducer;
