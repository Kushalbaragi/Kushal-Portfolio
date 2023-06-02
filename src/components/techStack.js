import React from 'react'
import setting from '../assets/settings.png'

function TechStack() {
  return (
    <section className="techstack-wrapper m-60">
        <p className="sub-heading m-30"><img src={setting} alt='account-icon'/>Tech Stacks
        </p>
      <div className='language m-40'>
        <p className='title'>Language</p>
        <button className='button-secondary'>Basic C</button>
        <button className='button-secondary'>Javascript</button>
      </div>
      <div className='language m-40'>
        <p className='title'>Technology</p>
        <button className='button-secondary'>HTML5</button>
        <button className='button-secondary'>CSS3</button>
        <button className='button-secondary'>SASS/SCSS</button>
        <button className='button-secondary'>ReactJS</button>
        <button className='button-secondary'>Redux</button>
        <button className='button-secondary'>Rest API</button>
        <button className='button-secondary'>Fetch API</button>
        <button className='button-secondary'>Bootstrap</button>
        <button className='button-secondary'>Tailwind CSS</button>
        <button className='button-secondary'>Typescript</button>
        <button className='button-secondary'>EcmaScript 6</button>
        <button className='button-secondary'>Gsap</button>
        <button className='button-secondary'>BigCommerce</button>
      </div>
      <div className='language m-40'>
        <p className='title'>Softwares</p>
        <button className='button-secondary'>Git & GitHub</button>
        <button className='button-secondary'>Microsoft Azure</button>
        <button className='button-secondary'>JIRA</button>
        <button className='button-secondary'>Figma</button>
        <button className='button-secondary'>Photoshop</button>
        <button className='button-secondary'>Premier Pro</button>
      </div>

    </section>
  )
}

export default TechStack