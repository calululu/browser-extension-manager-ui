import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/css/main.css";
import App from "./App.tsx";
import Footer from "./components/Footer";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
    <Footer />
  </StrictMode>,
);
