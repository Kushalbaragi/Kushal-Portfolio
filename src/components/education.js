import React from 'react'
import education from '../assets/education.png'
import clock from '../assets/clock.png';

function Education() {
  return (
    <div id='education' className='slide education-wrapper m-60'>
    <p className="sub-heading"><img src={education} alt='education-icon'/>Education</p>
    <div className='education-section m-30'>
      <p className='b-500 f-24'>Visvesvaraya Technological University (VTU)</p>
      <p className='body-txt m-5'>Bachelor of Engineering (ECE)</p>
      <p className='body-txt'><img src={clock} alt='clock-icon'/>2013 - 2015</p>
    </div>
    <div className='education-section m-30'>
      <p className='b-500 f-24'>SDM PU College Dharawad</p>
      <p className='body-txt'>PUC(Science)</p>
      <p className='body-txt'><img src={clock} alt='clock-icon'/>2013 - 2015</p>
    </div>
    <div className='education-section m-30'>
      <p className='b-500 f-24'>Shri Murughendra School Chikkodi</p>
      <p className='body-txt'>Secondary School (SSLC)</p>
      <p className='body-txt'><img src={clock} alt='clock-icon'/>2012 - 2013</p>
    </div>
    </div>
  )
}

export default Education