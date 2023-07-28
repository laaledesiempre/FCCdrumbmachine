import { createSlice } from "@reduxjs/toolkit";
export const displaySlice = createSlice({
  name: "display",
  initialState: {
    display: "",
  },
  reducers: {
    setDisplayContent: (state, action) => {
      state.display = action.payload;
    },
  },
});
export const { setDisplayContent } = displaySlice.actions;
export const displayReducer = displaySlice.reducer;

export const changeDisplay = (content) => (dispatch) => {
  dispatch(setDisplayContent(content));
};
