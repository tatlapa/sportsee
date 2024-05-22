import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.tsx";
import AsideNav from "./components/AsideNav.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Header />
    <AsideNav />
  </React.StrictMode>
);
