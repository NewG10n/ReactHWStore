import { configureStore, combineReducers } from "@reduxjs/toolkit";
import logger from "redux-logger";

import goodsReducer from "./goodsSlice";
import modalReducer from "./modalSlice";

export default configureStore({
  reducer: combineReducers({
    goods: goodsReducer,
    modal: modalReducer,
  }),
  middleware: [logger],
});
