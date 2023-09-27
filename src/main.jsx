import React from 'react'
import ReactDOM from 'react-dom/client'
import App from "./App";
import PostCreator from "./PostCreator"

import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);