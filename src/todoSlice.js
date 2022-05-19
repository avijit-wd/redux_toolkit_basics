import { createSlice } from "@reduxjs/toolkit";
import { getTodoReq } from "./todoSliceApi";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todo: [],
    toggle: false,
    pending: null,
  },
  reducers: {
    handleToggle: (state, action) => {
      state.toggle = action.payload.toggle;
    },
  },
  extraReducers: {
    [getTodoReq.pending]: (state) => {
      state.pending = true;
    },
    [getTodoReq.fulfilled]: (state, action) => {
      state.pending = false;
      state.todo = action.payload;
    },
    [getTodoReq.rejected]: (state) => {
      state.pending = false;
    },
  },
});

export const { handleToggle } = todoSlice.actions;

export default todoSlice.reducer;
