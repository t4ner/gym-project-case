import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import NavSection from "../../components/NavSection";
import Feedback from "../../components/Feedback";
import Challenge from "../../components/Challenge";
import MobileApp from "../../components/MobileApp";
import Membership from "../../components/Membership";
import Gallery from "../../components/Gallery";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";

function HomePage() {
  const [nav, setNav] = useState(false);

  window.addEventListener("scroll", () => {
    const scroll = document.documentElement.scrollTop;
    if (scroll > 405) {
      setNav(true);
    } else {
      setNav(false);
    }
  });
  return (
    <>
      <Navbar nav={nav} />
      <Hero />
      <NavSection />
      <Feedback />
      <Challenge />
      <MobileApp />
      <Membership />
      <Gallery />
      <Contact />
      <Footer />
    </>
  );
}

export default HomePage;
