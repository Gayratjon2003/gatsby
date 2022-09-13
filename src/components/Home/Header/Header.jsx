import React from "react";
import "./header.scss";
import Fade from "react-reveal/Fade";
import { FaChevronDown } from 'react-icons/fa';
export default function Header() {
  return (
    <>
      <div className="header">
        <div className="header-content">
          <Fade top duration={2000}>
            <h1>
              Umidjon <br /> Negmatullayev
            </h1>
          </Fade>
          <Fade bottom duration={2000}>
            <h2>SOFTWARE ENGINEER, FRONT END & APP DEVELOPER.</h2>
          </Fade>
        </div>

        <Fade top delay={2000}>
          <div className="next-page">
            <a href="#expertise">
            <FaChevronDown />
            </a>
          </div>
        </Fade>
      </div>
    </>
  );
}
