import { createSlice } from "@reduxjs/toolkit";
import { selectUnique } from "../utils/tools";

const goodsSlice = createSlice({
  name: "goods",
  initialState: [],
  reducers: {
    fetch: (state, action) => selectUnique(state, action.payload),

    addToCart: (state, action) => {
      const product = state.find((item) => item.id === action.payload.id);
      if (product) {
        product.cartQty = (product.cartQty || 0) + 1;
      }
    },

    removeFromCart: (state, action) => {
      const product = state.find((item) => item.id === action.payload.id);
      if (product) {
        delete product.cartQty;
      }
    },

    toggleFavorite: (state, action) => {
      const product = state.find((item) => item.id === action.payload.id);
      if (product) {
        product.isFavorite = !product.isFavorite;
      }
    },
  },
});

export const { fetch, addToCart, removeFromCart, toggleFavorite } =
  goodsSlice.actions;

export const getAllGoods = (state) => state.goods;

export const getGoodById = (state, itemId) =>
  state.goods.find((item) => item.id === itemId);

export default goodsSlice.reducer;
