import React from "react";
import Navbar from "../navbar/Navbar";
import Header from './Header/Header';
import Expertise from "./Expertise/Expertise";
import Experience from "./Experience/Experience";
import Projects from "./Projects/Projects";
import Testimonals from "./Testimonals/Testimonals";
import Footer from '../Footer/Footer';

function HomePage() {
  return (
    <>
      <Navbar />
      <Header />
      <Expertise />
      <Experience />
      <Projects />
      <Testimonals />
      <Footer />
    </>
  );
}

export default HomePage;
