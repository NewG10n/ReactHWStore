import { configureStore, combineReducers } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import logger from "redux-logger";

import goodsReducer from "./goodsSlice";
import modalReducer from "./modalSlice";

export default configureStore({
  reducer: combineReducers({
    goods: goodsReducer,
    modal: modalReducer,
  }),
  middleware: [thunk, logger],
});
