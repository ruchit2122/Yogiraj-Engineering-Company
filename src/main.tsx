import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

// Disable copy, right-click, and text selection globally
if (typeof window !== "undefined") {
  window.addEventListener("contextmenu", function (e) {
    e.preventDefault();
  });
  window.addEventListener("copy", function (e) {
    e.preventDefault();
  });
  window.addEventListener("selectstart", function (e) {
    e.preventDefault();
  });
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
