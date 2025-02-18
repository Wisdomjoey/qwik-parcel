import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Navbar from "./Components/Navbar/Navbar";
import Procurement from "./Components/Service/Procurement/Procurement";
import InterState from "./Components/Service/InterState/InterState";
import AirFreight from "./Components/Service/AirFreight/AirFreight";
import SeaFreight from "./Components/Service/SeaFreight/SeaFreight";
import Haulage from "./Components/Service/Haulage/Haulage";
import Dispatch from "./Components/Service/Dispatch/Dispatch";
import Custom from "./Components/Service/Custom/Custom";
import Service from "./Components/Service/Service";
import Footer from "./Components/Footer/Footer";
import Contact from "./Components/Contact/Contact";
import Tracking from "./Components/Tracking/Tracking";

const ele = document.getElementById("__bobby__");
const root = ReactDOM.createRoot(ele);
const path = window.location.pathname;
console.log(path);
let component = <App />;

if (path === "/#/services/procurement")
  component = (
    <>
      <Navbar />
      <Procurement />
    </>
  );

if (path === "/#/services/inter-state")
  component = (
    <>
      <Navbar />
      <InterState />
    </>
  );

if (path === "/#/services/airfreight")
  component = (
    <>
      <Navbar />
      <AirFreight />
    </>
  );

if (path === "/#/services/seafreight")
  component = (
    <>
      <Navbar />
      <SeaFreight />
    </>
  );

if (path === "/#/services/haulage")
  component = (
    <>
      <Navbar />
      <Haulage />
    </>
  );

if (path === "/#/services/dispatch")
  component = (
    <>
      <Navbar />
      <Dispatch />
    </>
  );

if (path === "/#/services/custom-clearance")
  component = (
    <>
      <Navbar />
      <Custom />
    </>
  );

if (path === "/#/services/forwarding")
  component = (
    <>
      <Navbar bg={true} />
      <Service />
      <Footer />
    </>
  );

if (path === "/#/support") component = <Contact />;
if (path === "/#/tracking") component = <Tracking />;

root.render(component);
