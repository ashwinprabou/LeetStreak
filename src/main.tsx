import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import Landing from "./landing.tsx";

const rootElement = document.getElementById("root");
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <BrowserRouter>
      <Landing />
    </BrowserRouter>
  );
} else {
  console.error("Root element. is NULL");
}
