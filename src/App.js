import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./Components/Contact/Contact";
// import Carousel from './Components/Carousel/Carousel';
import Footer from "./Components/Footer/Footer";
// import Gallery from './Components/Gallery/Gallery';
// import Goods from './Components/Goods/Goods';
import Header from "./Components/Header/Header";
import Services from "./Components/Services/Services";
import Testimonials from './Components/Testimonials/Testimonials';
// import Admin from './Components/Admin/Admin';
import Navbar from "./Components/Navbar/Navbar";
import SeaFreight from "./Components/Service/SeaFreight/SeaFreight";
import AirFreight from "./Components/Service/AirFreight/AirFreight";
import Haulage from "./Components/Service/Haulage/Haulage";
import Service from "./Components/Service/Service";
import Custom from "./Components/Service/Custom/Custom";
import Dispatch from "./Components/Service/Dispatch/Dispatch";
import InterState from "./Components/Service/InterState/InterState";
import Procurement from "./Components/Service/Procurement/Procurement";
import About from "./Components/About/About";
import Qualities from "./Components/Qualities/Qualities";
// import H404 from "./Components/404/404";
import Tracking from "./Components/Tracking/Tracking";

export default function App() {
  return (
      <div className="App" id="app">
        <Router>
          <Routes>
            <Route
              path="/#/services/procurement"
              element={
                <>
                  <Navbar />
                  <Procurement />
                </>
              }
              exact
            />
            <Route
              path="/#/services/inter-state"
              element={
                <>
                  <Navbar />
                  <InterState />
                </>
              }
              exact
            />
            <Route
              path="/#/services/airfreight"
              element={
                <>
                  <Navbar />
                  <AirFreight />
                </>
              }
              exact
            />
            <Route
              path="/#/services/seafreight"
              element={
                <>
                  <Navbar />
                  <SeaFreight />
                </>
              }
              exact
            />
            <Route
              path="/#/services/haulage"
              element={
                <>
                  <Navbar />
                  <Haulage />
                </>
              }
              exact
            />
            <Route
              path="/#/services/dispatch"
              element={
                <>
                  <Navbar />
                  <Dispatch />
                </>
              }
              exact
            />
            <Route
              path="/#/services/custom-clearance"
              element={
                <>
                  <Navbar />
                  <Custom />
                </>
              }
              exact
            />
            <Route
              path="/#/services/forwarding"
              element={
                <>
                  <Navbar bg={true} />
                  <Service />
                  <Footer />
                </>
              }
              exact
            />
            <Route path="/#/support" element={<Contact />} exact />
            <Route path="/#/tracking" element={<Tracking />} exact />
            <Route
              exact
              path="/"
              element={
                <>
                  <Navbar />
                  <Header />
                  <About />
                  {/* <Goods /> */}
                  <Services />
                  {/* <Gallery /> */}
                  <Testimonials />
                  <Qualities />
                  <Footer />
                </>
              }
            />
            {/* <Route path="*" element={<H404 />} exact /> */}
          </Routes>
        </Router>
      </div>
  );
}
