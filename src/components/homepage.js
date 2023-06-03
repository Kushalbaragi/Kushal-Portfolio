import React from "react";
import profile from "../assets/profile.png";
import linkedIn from "../assets/linkedIn.png";
import leetCode from "../assets/leetCode.png";
import gitHub from "../assets/gitHub.png";
import scrollDown from "../assets/scrollDown.png";
import AboutMe from "./aboutMe";
import TechStack from "./techStack";
import Experience from "./experience";
import Education from "./education";
import Projects from "./projects";
import contact from "./contact";
import Contact from "./contact";

function Homepage() {
  return (
    <div id='home' className="homePage-wrapper">
      <div className="left-wrapper">
        <h1>Kushal Baragi</h1>
        <div className="role">Front End Developer</div>
        <div className="body-txt">
          a passionate front end Developer having
          <strong> 2+ years of Industrial experience</strong> in Web Development
          and have built several eCommerce websites.
        </div>
        <div className="body-txt">
          In spare time, i share my experience through my{' '}
          <a href="https://www.youtube.com/@KushalBaragi" target='_blank' rel="noreferrer"><strong>Youtube</strong> </a>videos and I like making video on unboxing &
          reviews of gadgets.
        </div>
        <ul className="navBar">
          <li>
            <span className="number">01</span>
            <span className="line"></span>
            <a href='#aboutMe' ><span className="menu">AboutMe</span></a>
          </li>
          <li>
            <span className="number">02</span>
            <span className="line"></span>
            <a href='#techStack' ><span className="menu">Tech Stack</span></a>
          </li>
          <li>
            <span className="number">03</span>
            <span className="line"></span>
            <a href='#experience' ><span className="menu">Experience</span></a>
          </li>
          <li>
            <span className="number">04</span>
            <span className="line"></span>
            <a href='#education' ><span className="menu">Education</span></a>
          </li>
          <li>
            <span className="number">05</span>
            <span className="line"></span>
            <a href='#personal-projects' ><span className="menu">Projects</span></a>
          </li>
          <li>
            <span className="number">06</span>
            <span className="line"></span>
            <a href='#contact' ><span className="menu">Contacts</span></a>
          </li>
        </ul>
        <ul className="bottom-links ">
          <li>
          <a href="#home" target='_blank' rel="noreferrer"><img src={profile} alt="profile" /></a>
          </li>
          <a href="https://www.linkedin.com/in/kushal-baragi-3ba188186/" target='_blank' rel="noreferrer"><li className="linkedIn">
            LinkedIn
            <img src={linkedIn} alt="LinkedIn" />
          </li>
          </a>
          <a href="https://leetcode.com/kushalbaragi/" target='_blank' rel="noreferrer"><li>
            Leetcode
            <img src={leetCode} alt="Leetcode" />
          </li>
          </a>
          <a href="https://github.com/Kushalbaragi" target='_blank' rel="noreferrer"><li>
            GitHub
            <img src={gitHub} alt="GitHub" />
          </li>
          </a>
        </ul>
      </div>
      <div className="right-wrapper">
        <div className="scroll-down">
          <div className="wrapper">
            <img src={scrollDown} alt="arrow-down" />
            <span>SCROLL DOWN</span>
          </div>
        </div>
        <hr class='mobile'/>
        <AboutMe />
        <hr/>
        <TechStack />
        <hr/>
        <Experience />
        <hr/>
        <Education />
        <hr/>
        <Projects />
        <hr/>
        <Contact />
      </div>
    </div>
  );
}

export default Homepage;
