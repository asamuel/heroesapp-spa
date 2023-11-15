import ReactDOM from "react-dom/client";
import { HeroesApp } from "./HeroesApp.jsx";
import "./styles.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <HeroesApp />
  </BrowserRouter>
);
