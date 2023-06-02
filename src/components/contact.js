import React from "react";
import mail from "../assets/mail.png";
import hand from '../assets/hand.png'
import external from "../assets/External.png"
import location from '../assets/map-pin.png';


function Contact() {
  return (
    <div className="contact-wrapper m-60">
      <p className="sub-heading">
        Say Hello
        <img src={hand} alt="office-icon" />
      </p>
      <p className='body-txt'>Please feel free to contact me and I will get back to you as soon as I can</p>
      <form>
        <input className='m-40' type="text" name='name' placeholder="Enter Your Name"/>
        <input className='m-40' type="email" name='email' placeholder="Enter Your Email"/>
        <input className='m-40' type="text" name='message' placeholder="Your Message"/>
      <button className='button-primary'>Submit <img src={external} alt='send-icon'/></button>
      </form>
      <div className='bottom-wrapper'>
      <p className="bottom body-txt"><img src={mail} alt='mail-icon'/>Email : <a href='mailto:kushalbaragi83@gmail.com'>Kushalbaragi83@gmail.com</a></p>
      <p className="bottom body-txt"><img src={location} alt='location-icon'/>Bangalore, Karnataka, India</p>
      </div>
     
    </div>
  );
}

export default Contact;
