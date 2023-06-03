import React, { useEffect} from "react";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/all";
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
import Contact from "./contact";

function Homepage() {

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });

    let hiddenElement = document.querySelectorAll(".navbar-aniamtion");
    hiddenElement.forEach((el) => observer.observe(el));
    gsap.from(hiddenElement,{
      opacity:0,
      x:200,
      stagger:0.2,
      delay:1.2
    })
    gsap.from('.bottom-links',{
      opacity:0,
      delay:2.7
    })
    gsap.from('.body-txt',{
      opacity:0,
      delay:0.75,
      y:40,
      stagger:0.2
    })
    gsap.from('.scroll-down',{
      opacity:0,
      delay:3.25,
      y:-40,
    })
   
  });

  return (
    <div id='smoothwrapper'>
    <div id='home' className="homePage-wrapper">
      <div className="left-wrapper">
        <h1 className='titleAnimation'>Kushal Baragi</h1>
        <div className="role titleAnimation">Front End Developer</div>
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
          <li className='navbar-aniamtion'>
            <span className="number">01</span>
            <span className="line"></span>
            <span className="menu" onClick={()=>{
            document
            .querySelector("#aboutMe")
            .scrollIntoView({ behavior: "smooth"});
          }}>{' '}AboutMe</span>
          </li>
          <li className='navbar-aniamtion'>
            <span className="number">02</span>
            <span className="line"></span>
            <span className="menu" onClick={()=>{
            document
            .querySelector("#techStack")
            .scrollIntoView({ behavior: "smooth"});
          }}>Tech Stack</span>
          </li>
          <li className='navbar-aniamtion'>
            <span className="number">03</span>
            <span className="line"></span>
            <span className="menu" onClick={()=>{
            document
            .querySelector("#experience")
            .scrollIntoView({ behavior: "smooth" });
          }}>Experience</span>
          </li>
          <li className='navbar-aniamtion'>
            <span className="number">04</span>
            <span className="line"></span>
            <span className="menu" onClick={()=>{
            document
            .querySelector("#education")
            .scrollIntoView({ behavior: "smooth" })}}>Education</span>
          </li>
          <li className='navbar-aniamtion'>
            <span className="number">05</span>
            <span className="line"></span>
            <a href='#personal-projects' ><span className="menu" onClick={()=>{
            document
            .querySelector("#personal-projects")
            .scrollIntoView({ behavior: "smooth" });
          }}>Projects</span></a>
          </li>
          <li className='navbar-aniamtion'>
            <span className="number">06</span>
            <span className="line"></span>
            <span className="menu" onClick={()=>{
            document
            .querySelector("#contact")
            .scrollIntoView({ behavior: "smooth" });
          }}>Contacts</span>
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
        <hr className='mobile'/>
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
    </div>
  );
}

export default Homepage;  
