import React from "react";
import { render } from "react-dom";

//imported the React Router's Router
import { BrowserRouter as Router } from "react-router-dom";

import "./index.css";
import App from "./App";

// You'll need to wrap <App /> for routing to work
render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
