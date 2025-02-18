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
const path = document.location.hash;
console.log(path);
let component = <App />;

switch (path) {
  case "#/services/procurement":
    component = (
      <React.Fragment>
        <Navbar />
        <Procurement />
      </React.Fragment>
    );
    break;
  case "#/services/inter-state":
    component = (
      <React.Fragment>
        <Navbar />
        <InterState />
      </React.Fragment>
    );
    break;
  case "#/services/airfreight":
    component = (
      <React.Fragment>
        <Navbar />
        <AirFreight />
      </React.Fragment>
    );
    break;
  case "#/services/seafreight":
    component = (
      <React.Fragment>
        <Navbar />
        <SeaFreight />
      </React.Fragment>
    );
    break;
  case "#/services/haulage":
    component = (
      <React.Fragment>
        <Navbar />
        <Haulage />
      </React.Fragment>
    );
    break;
  case "#/services/dispatch":
    component = (
      <React.Fragment>
        <Navbar />
        <Dispatch />
      </React.Fragment>
    );
    break;
  case "#/services/custom-clearance":
    component = (
      <React.Fragment>
        <Navbar />
        <Custom />
      </React.Fragment>
    );
    break;
  case "#/services/forwarding":
    component = (
      <React.Fragment>
        <Navbar bg={true} />
        <Service />
        <Footer />
      </React.Fragment>
    );
    break;
  case "#/support":
    component = <Contact />;
    break;
  case "#/tracking":
    component = <Tracking />;
    break;

  default:
    break;
}

root.render(component);
