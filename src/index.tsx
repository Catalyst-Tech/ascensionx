import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Buy from "./components/Buy";
import Whitepaper from "./components/Whitepaper";
import GettingStarted from "./components/GettingStarted";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ParallaxProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/ascensionx" element={<App />} />
          <Route path="/ascensionx/buy" element={<Buy />} />
          <Route path="/ascensionx/whitepaper" element={<Whitepaper />} />
          <Route
            path="/ascensionx/gettingStarted"
            element={<GettingStarted />}
          />
        </Routes>
      </BrowserRouter>
    </ParallaxProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
