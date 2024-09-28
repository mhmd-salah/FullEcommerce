import { createRoot } from "react-dom/client";
import "./index.css";
import MainWrapper from "./utilts/MainWrapper.tsx";
import App from "./App.tsx";

const root = createRoot(document.getElementById("root")!,{
  onRecoverableError:(error, errorInfo)=> {
    console.error(error," --------------------------------- ")
    console.info(errorInfo)
  },
})

root.render(
  <MainWrapper>
    <App />
  </MainWrapper>
);
