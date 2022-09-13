import React from "react";
import "./footer.scss";
import logo from "../../assets/img/logo_white.png";
import { Fade, Zoom } from "react-reveal";

export default function Footer() {
  return (
    <div className="footer" id="footer">
      <Fade left duration={2000}>
        <a href="#" className="footer_logo">
          <img src={logo} alt="error" />
        </a>
      </Fade>

      <div className="footer_content">
        <div className="footer_content-block">
          <Fade top duration={2000} >
            <h6>Contacts</h6>
          </Fade>
          <Zoom  duration={2000} cascade>
            <ul className="footer-dates">
              <li>
                <a href="mailto:undigitals@gmail.com">
                  Email: undigitals@gmail.com{" "}
                </a>
              </li>
              <li>Phone: +998 (99) 398 24 42</li>
              {/* <li><a href=""></a></li> */}
            </ul>
          </Zoom>
          <Fade top duration={2000} cascade>
            <ul className="footer-socials">
              <li>
                <a href="#!">
                  <i class="bx bxl-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#!">
                  <i class="bx bxl-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#!">
                  <i class="bx bxl-youtube"></i>
                </a>
              </li>
              <li>
                <a href="#!">
                  <i class="bx bxl-instagram"></i>
                </a>
              </li>
            </ul>
          </Fade>
        </div>
        <div className="footer_content-block">
          <Fade right duration={2000}>
            <h6>Address</h6>
          </Fade>
          <Zoom duration={2000}>
            <p>Tashkent, Uzbekistan</p>
          </Zoom>
        </div>
      </div>
    </div>
  );
}

{
  /* <ul>
<li><a href="#">Home</a></li>
<li><a href="#">Blog</a></li>
<li><a href="#">Contact</a></li>
</ul> */
}
