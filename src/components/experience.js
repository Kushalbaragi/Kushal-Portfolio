import React from 'react'
import company from '../assets/office.png'
import experience from '../assets/briefcase.png'
import send from '../assets/send.png';


function Experience() {
  return (
    <div className='projects-wrapper m-60'>
         <p className="sub-heading"><img src={experience} alt='experience-icon'/>Experience</p>
         <p className="sub-heading"><img src={company} alt='office-icon'/>Mindtree</p>
         <p className='body-txt'>Joined <strong>Mindtree in April 2021</strong> as a campus mind and have trained on MERN e-j for 90days where I got in hand experience with MangoDB, ExpressJS, ReactJS, NodeJS, Javascript. Immediately after trainig we put on real projects</p>
         <p className='body-txt'>Over two years of experience in Mindtree i worked as <strong>ReactJS Developer, UI Developer, Big Commerce developer</strong> for various projects and achieved ‘Spot On Coder’ award  2021 & 2022</p>
        <div className='projects m-21'>
          <div className='card'>
            <p className='sub-title'>Project 01</p>
            <p className='sub-heading m-15'>Olay-Australia</p>
            <p className='body-txt'><stron>Role :</stron> Worked as front end developer and Got exposure to UI-development, Github, Azure, GA-GTM Integration and SEO Optimisation</p>
            <button className='button-primary'>Livesite<img src={send} alt='send-icon'/></button>
          </div>
        </div>
        <div className='projects m-21'>
          <div className='card'>
            <p className='sub-title'>Project 02</p>
            <p className='sub-heading m-15'>Bodewell</p>
            <p className='body-txt'><stron>Role :</stron> Took ownership for Homepage, product detail page & custom page implementation. improved website performance by taking several steps to reduce JS file loading</p>
            <button className='button-primary'>Livesite<img src={send} alt='send-icon'/></button>
          </div>
        </div>
        <div className='projects m-21'>
          <div className='card'>
            <p className='sub-title'>Project 03</p>
            <p className='sub-heading m-15'>Lifeshield</p>
            <p className='body-txt'><stron>Role :</stron> Implemented Animation with GSAP, took ownership of third party integration with site, Product page, cart page, checkout page, email templates and improved accessibility</p>
            <button className='button-primary'>Livesite<img src={send} alt='send-icon'/></button>
          </div>
        </div>

    </div>
  )
}

export default Experience