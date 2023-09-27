import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import PostCreator from "./PostCreator"

import { RouterProvider, createBrowserRouter } from "react-router-dom";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/PostCreator", element: <PostCreator /> }
]);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);