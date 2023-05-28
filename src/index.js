import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./app/store.js";

import App from "./App";
import Goods from "./screens/goods";
import Cart from "./screens/cart";
import Fav from "./screens/fav";
import Welcome from "./screens/welcome";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Welcome />,
      },
      {
        path: "goods",
        element: <Goods />,
      },
      {
        path: "fav",
        element: <Fav />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
