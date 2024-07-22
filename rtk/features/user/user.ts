import { createSlice } from "@reduxjs/toolkit";
interface initialState {
  user: any;
}
const initialState: initialState = {
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});
export default userSlice.reducer;
export const { setUser } = userSlice.actions;
