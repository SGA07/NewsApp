import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import bgImage from "./bgImage.jpg";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div style={{ backgroundImage: `url(${bgImage})` }}>
      <App />
    </div>
  </React.StrictMode>
);
