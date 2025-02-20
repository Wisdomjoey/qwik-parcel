"use client";

import About from "../components/About/About";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import Qualities from "../components/Qualities/Qualities";
import Services from "../components/Services/Services";
import Testimonials from "../components/Testimonials/Testimonials";

export default function Home() {
  return (
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
  );
}
