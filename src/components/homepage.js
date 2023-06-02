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
    <div className="homePage-wrapper">
      <div className="left-wrapper">
        <h1>Kushal Baragi</h1>
        <div className="role">Front End Developer</div>
        <div className="body-txt">
          a passionate front end Developer having{" "}
          <strong>2+ years of Industrial experience</strong> in Web Development
          and have built several eCommerce websites.
        </div>
        <div className="body-txt">
          In spare time, i share my experience through my{" "}
          <strong>Youtube</strong> videos and I like making video on unboxing &
          reviews of gadgets.
        </div>
        <ul className="navBar">
          <li>
            <span className="number">01</span>
            <span className="line"></span>
            <span className="menu">About Me</span>
          </li>
          <li>
            <span className="number">02</span>
            <span className="line"></span>
            <span className="menu">Tech Stack</span>
          </li>
          <li>
            <span className="number">03</span>
            <span className="line"></span>
            <span className="menu">Experience</span>
          </li>
          <li>
            <span className="number">04</span>
            <span className="line"></span>
            <span className="menu">Education</span>
          </li>
          <li>
            <span className="number">05</span>
            <span className="line"></span>
            <span className="menu">Projects</span>
          </li>
          <li>
            <span className="number">06</span>
            <span className="line"></span>
            <span className="menu">Contact</span>
          </li>
        </ul>
        <ul className="m-60 bottom-links ">
          <li>
            <img src={profile} alt="profile" />
          </li>
          <li className="linkedIn">
            LinkedIn
            <img src={linkedIn} alt="LinkedIn" />
          </li>
          <li>
            Leetcode
            <img src={leetCode} alt="Leetcode" />
          </li>
          <li>
            GitHub
            <img src={gitHub} alt="GitHub" />
          </li>
        </ul>
      </div>
      <div className="right-wrapper">
        <div className="scroll-down">
          <div className="wrapper">
            <img src={scrollDown} alt="arrow-down" />
            <span>SCROLL DOWN</span>
          </div>
        </div>
        <AboutMe />
        <hr className="m-40"></hr>
        <TechStack />
        <hr className="m-40"></hr>
        <Experience />
        <hr className="m-40"></hr>
        <Education />
        <hr className="m-40"></hr>
        <Projects />
        <hr className="m-40"></hr>
        <Contact/>
      </div>
    </div>
  );
}

export default Homepage;
