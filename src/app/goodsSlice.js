import { createSlice } from "@reduxjs/toolkit";
import { selectUnique } from "../utils/tools";

const goodsSlice = createSlice({
  name: "goods",
  initialState: [],
  reducers: {
    update: (state, action) => selectUnique(state, action.payload),
  },
});

export const { update } = goodsSlice.actions;

export default goodsSlice.reducer;
