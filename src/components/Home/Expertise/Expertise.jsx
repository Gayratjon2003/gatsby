import React from "react";
import { Fade } from "react-reveal";
import "./expertise.scss";
import { FaReact } from 'react-icons/fa';
import { FaCode } from 'react-icons/fa';
import { FaDesktop } from 'react-icons/fa';


export default function Expertise() {

  return (
    <div className="expertise container" id="expertise">
      <div className="introduce">
        <Fade bottom duration={2000}>
          <h2>Hi, I’m Umid</h2>
        </Fade>
        <Fade bottom delay={500} duration={1500}>
          <p>
            Senior Software Engineer with over 3 years of production experience
            building scalable and performant full stack web applications to
            deliver exceptional user experience and interface in E-commerce and
            EdTech fields and have extensive experience working in Agile (Scrum
            & Kanban) and test- driven environment
          </p>
        </Fade>
      </div>
      <div className="skills">
        <Fade bottom duration={2000} delay={500}>
          <div className="skills-box">
            <div className="card card-1">
              <div className="blog">
                <div className="blog-top">
                  <span>
                  <FaDesktop />
                  </span>
                  <h2>Software Engineer</h2>
                  <p>
                    I value simple content structure, clean design patterns, and
                    thoughtful interactions.
                  </p>
                </div>
                <div className="blog-center">
                  <p className="blog-center-title">Things I enjoy designing:</p>
                  <p className="blog-center-text">
                    Dart, Python, Java, JavaScript, TypeScript.
                  </p>
                </div>
              </div>
            </div>
            <div className="card card-2">
              <div className="blog">
                <div className="blog-top">
                  <span>
                    <FaCode />
                  </span>
                  <h2>Frontend Developer</h2>
                  <p>
                    I like to code things from scratch, and enjoy bringing ideas
                    to life in the browser.
                  </p>
                </div>
                <div className="blog-center">
                  <p className="blog-center-title">Languages I speak:</p>
                  <p className="blog-center-text">
                    HTML, Pug, Slim, CSS, Sass, Git
                  </p>
                </div>
              </div>
            </div>
            <div className="card card-3">
              <div className="blog">
                <div className="blog-top">
                  <span>
                    <i className="bx bxl-react"></i>
                    <FaReact />
                  </span>
                  <h2>React Native Developer</h2>
                  <p>
                    I genuinely care about people, and love helping fellow
                    designers work on their craft.
                  </p>
                </div>
                <div className="blog-center">
                  <p className="blog-center-title">Experiences I draw from:</p>
                  <p className="blog-center-text">
                    UX/UI, Product design, Freelancing
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}
