import React from "react";
import NavbarIcon from "../layerComponents/NavbarIcon";
import Footer from "./Footer";
import ScrollToTopButton from "./ScrollTop";
import Contact from "./Contact";
import Projects from "./Projects";
import Resume from "./Resume";
import About from "./About";
import Content from "./Content";
import { Navbar } from "./Navbar";
function Home() {
  return (
    <>
      <Navbar />
      <Content />
      <About />
      <Resume />
      <Projects />
      <Contact />
      <ScrollToTopButton />
      <Footer />
      <NavbarIcon />
    </>
  );
}

export default Home;
