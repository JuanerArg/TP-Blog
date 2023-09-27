import React from 'react'
import ReactDOM from 'react-dom/client'
import App from "./App";
import PostCreator from "./PostCreator"

import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },

  {
    path: "/PostCreator",
    element: <PostCreator />
  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);