import { configureStore, combineReducers } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import logger from "redux-logger";

import goodsReducer from "./goodsSlice";
import modalReducer from "./modalSlice";
import orderReducer from "./orderSlice";

export default configureStore({
  reducer: combineReducers({
    goods: goodsReducer,
    modal: modalReducer,
    order: orderReducer,
  }),
  middleware: [thunk, logger],
});
