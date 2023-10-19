import { createRoot } from "react-dom/client";
import App from "./components/App/App";
import React from "react";
import { HashRouter as Router } from "react-router-dom";

const rootElement = document.querySelector("#root");

if (!rootElement) {
  throw new Error("no root element");
}

const root = createRoot(rootElement);

root.render(
  <Router>
    <App />
  </Router>
);
