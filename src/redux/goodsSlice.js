import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { selectUnique } from "../utils/tools";
import axios from "axios";

const initialState = {
  data: [],
  status: "idle",
  error: null,
};

export const fetchGoods = createAsyncThunk("goods/fetchGoods", async () => {
  const response = await axios.get("https://fakestoreapi.com/products");
  return response.data;
});

const goodsSlice = createSlice({
  name: "goods",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = state.data.find((item) => item.id === action.payload.id);
      if (product) {
        product.cartQty = (product.cartQty || 0) + 1;
      }
    },

    removeFromCart: (state, action) => {
      const product = state.data.find((item) => item.id === action.payload.id);
      if (product) {
        delete product.cartQty;
      }
    },

    toggleFavorite: (state, action) => {
      const product = state.data.find((item) => item.id === action.payload.id);
      if (product) {
        product.isFavorite = !product.isFavorite;
      }
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchGoods.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchGoods.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = selectUnique(state.data, action.payload);
      });
  },
});

export const { addToCart, removeFromCart, toggleFavorite } = goodsSlice.actions;

export const getAllGoods = (state) => state.goods.data;

export const getGoodById = (state, itemId) =>
  state.goods.data.find((item) => item.id === itemId);

export default goodsSlice.reducer;
