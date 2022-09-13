import React, { useState } from "react";
import "./Navbar.scss";
import logo from "../../assets/img/logo_white.png";
import { Link } from "gatsby"
import { Fade } from "react-reveal";
import Spin from 'react-reveal/Spin';
import cx from 'classname';
import 'boxicons';
import Resume from '../../assets/Umid.pdf';

function Navbar() {
  const [navMenu, setNavMenu] = useState(true);
  const navMenuClass = cx({
    'menu': navMenu,
    "x" : !navMenu,
})

  const navList = cx({
    'display-none': navMenu,
  })
  return (
    <div className="navbar">
      <Spin duration={1000} >
        <a href="#">
        <Link to="/"> <img src={logo} alt="logo" className="logo" /> </Link>
        </a>
      </Spin>
      <Fade top cascade duration={1000}>
        <ul className={"navbar__list " + navList}>
          <li className="navbar__list-link">
            <Link to="/">// Home</Link>
          </li>
          {/* <li className="navbar__list-link"><Link to="/about">// About</Link></li> */}
          <li className="navbar__list-link">
            <Link to="/blogs">// Blog</Link>
          </li>
          <li className="navbar__list-link">
            <Link to="/contact">// Contact</Link>
          </li>
          <li className="navbar__list-link resume">
            <a
              href={Resume}
              download
            >
              Resume
            </a>
          </li>
        </ul>
        <span className="hamburger-menu">
        <i ></i>
        <box-icon name={navMenuClass} onClick={()=> navMenu ? setNavMenu(!navMenu) : setNavMenu(!navMenu)}></box-icon>
        </span>
      </Fade>
    </div>
  );
}

export default Navbar;

