import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useEffect } from "react";
import "./App.css";
import Content from "./components/Content";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ContactUs from "./components/ContactUs";
import LocomotiveScroll from "locomotive-scroll";
import PrivacyPolicy from "./components/PrivacyPolicy";

function App() {
  const scroll = new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    smooth: true,
  });

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Content />} />
          {/* <Route path="/contact" element={<ContactUs />} /> */}
          {/* <Route path="/privacyPolicy" element={<PrivacyPolicy />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
