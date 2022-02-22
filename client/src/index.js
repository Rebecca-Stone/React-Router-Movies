import React from "react";
import ReactDOM from "react-dom";

//imported the React Router's Router
import { BrowserRouter as Router } from "react-router-dom";

import "./index.css";
import App from "./App";

ReactDOM.render(
  // You'll need to wrap <App /> for routing to work
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
