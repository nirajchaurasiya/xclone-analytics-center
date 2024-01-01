import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// Styling Part
import "./styles/header.css";
import "./index.css";

// Connecting to dom with id root
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
