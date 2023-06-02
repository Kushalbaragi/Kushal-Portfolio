import React from "react";
import myPhoto from "../assets/myPhoto.png";
import send from '../assets/send.png';

function AboutMe() {
  return (
    <section className="aboutMe-wrapper">
      <img className="m-30" src={myPhoto} alt="profile photo" />
      <p className="sub-heading m-30">About Me</p>
      <div className="body-txt">
        Front end developer working in <strong>Mindtree</strong> having 2 years
        of industrial expertise in ReactJS. Proficient in big commerce,
        responsive web design & version control systems
      </div>
      <div className="body-txt">
        As a part-time <strong>YouTuber,</strong> I grew my channel's audience
        from 0 to 8.5k+ within two years of span. I gained valuable skills in
        content creation, video editing, social media management, and audience
        engagement.
      </div>
      <div className="body-txt">
        I make videos on technology gadgets and share experience with world
        thought Youtube videos
      </div>
      <button className='button-primary'>Checkout Here <img src={send} alt='send-icon'/></button>
    </section>
  );
}

export default AboutMe;
