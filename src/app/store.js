import { configureStore, combineReducers } from "@reduxjs/toolkit";
import logger from "redux-logger";

import goodsReducer from "./goodsSlice";

export default configureStore({
  reducer: combineReducers({
    goods: goodsReducer,
  }),
  middleware: [logger],
});
