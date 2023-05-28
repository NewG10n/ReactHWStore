import { createSlice } from "@reduxjs/toolkit";
import { selectUnique } from "../utils/tools";

const goodsSlice = createSlice({
  name: "goods",
  initialState: [],
  reducers: {
    fetch: (state, action) => selectUnique(state, action.payload),

    addToCart: (state, action) =>
      state.map((item) =>
        item.id === action.payload.id
          ? { ...item, cartQty: (item.cartQty || 0) + 1 }
          : item
      ),

    removeFromCart: (state, action) =>
      state.map((item) => {
        if (item.id === action.payload.id) {
          const { cartQty, ...updatedItem } = item;
          return updatedItem;
        }
        return item;
      }),
  },
});

export const { fetch, addToCart, removeFromCart } = goodsSlice.actions;

export default goodsSlice.reducer;
