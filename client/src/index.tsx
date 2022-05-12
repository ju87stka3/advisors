import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./Components/AppRouter";
import Navbar from "./Components/Navbar";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <AppRouter />
      </div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
