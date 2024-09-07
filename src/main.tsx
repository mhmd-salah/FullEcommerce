import { createRoot } from "react-dom/client";
import "./index.css";
import MainWrapper from "./utilts/MainWrapper.tsx";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <MainWrapper>
    <App />
  </MainWrapper>
);
