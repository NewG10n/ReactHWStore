import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "order",
  initialState: { orderData: {} },
  reducers: {
    logOrder: (state, action) => {
      const orderData = {
        orderedGoods: action.payload.orderedGoods,
        customerData: action.payload.customerData,
      };

      console.log("order data: ", orderData);

      state.orderData = orderData;
    },
  },
});

export const { logOrder } = orderSlice.actions;

export default orderSlice.reducer;
