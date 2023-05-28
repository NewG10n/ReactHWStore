import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import logger from "redux-logger";

import goodsReducer from "./goodsSlice";

const middleware = [...getDefaultMiddleware(), logger];

export default configureStore({
  reducer: combineReducers({
    goods: goodsReducer,
  }),
  middleware,
});
