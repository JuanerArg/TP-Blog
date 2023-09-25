import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const router = createBrowserRouter([
  { path: "/", element: <App /> }
]);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);