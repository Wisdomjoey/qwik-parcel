"use client";

import About from "../components/About/About";
import Delivery from "../components/Delivery/Delivery";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import News from "../components/News/News";
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
      <Delivery />
      <Services />
      {/* <Gallery /> */}
      <Testimonials />
      <Qualities />
      <News />
      <Footer />
    </>
  );
}
