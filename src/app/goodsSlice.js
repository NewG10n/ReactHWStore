import { createSlice } from "@reduxjs/toolkit";
import { selectUnique } from "../utils/tools";
import { addCartQty } from "../utils/CartHelpers";

const goodsSlice = createSlice({
  name: "goods",
  initialState: [],
  reducers: {
    fetch: (state, action) => selectUnique(state, action.payload),
    addToCart: (state, action) => addCartQty(state, action.payload.id),
  },
});

export const { fetch, addToCart } = goodsSlice.actions;

export default goodsSlice.reducer;
