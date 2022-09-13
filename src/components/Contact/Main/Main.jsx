import React from "react";
import { Fade } from "react-reveal";
import "./main.scss";

export default function Main() {
  return (
    <>
      <div className="contact">
        <div className="contact_content">
          <Fade top duration={1000}>
            <h3>Contacts</h3>
          </Fade>
          <Fade bottom duration={1000} >
            <ul>
              <li>
                <i class="bx bx-envelope"></i>
                <a href="mailto:undigitals@gmail.com">undigitals@gmail.com</a>
              </li>
              <li>
                <i class="bx bx-phone"></i>
                Phone: +998 (99) 398 24 42
              </li>
              <li>
                <i class="bx bx-home"></i>
                Address: Tasheknt, Uzbekistan
              </li>
              <Fade bottom  duration={1000}>
                <li className="social_networks">
                  <i class="bx bxl-twitter"></i>
                  <i class="bx bxl-facebook"></i>
                  <i class="bx bxl-youtube"></i>
                  <i class="bx bxl-instagram"></i>
                </li>
              </Fade>
            </ul>
          </Fade>
        </div>
      </div>
    </>
  );
}
