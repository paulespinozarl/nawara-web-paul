import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import { HashRouter } from "react-router-dom";

import "./styles/index.css";
import "./styles/burger.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HashRouter basename="/">
      <App />
    </HashRouter>
  </React.StrictMode>
);
