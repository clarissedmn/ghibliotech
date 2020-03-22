import React from "react";
import HomePage from "./business/pages/home/index";
import "./app.scss";
import logo from "../src/assets/studio_ghibli_logo.svg";

function App() {
  return (
    <>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <HomePage />
    </>
  );
}

export default App;
