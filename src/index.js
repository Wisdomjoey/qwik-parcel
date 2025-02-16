import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Contact from "./Components/Contact/Contact";

const ele = document.getElementById("__bobby__");
const ele1 = document.getElementById("__qp_support__");

console.log(window.location.href);

if (ele) {
  const root = ReactDOM.createRoot(ele);

  root.render(<App />);
}

if (ele1) {
  const root1 = ReactDOM.createRoot(ele1);

  root1.render(<Contact />);
}
