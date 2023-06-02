import React from "react";
import folder from "../assets/folder-plus.png";
import external from "../assets/External.png";
import gitHub from "../assets/gitHub.png";

function Projects() {
  return (
    <div className="projects-wrapper m-60">
      <p className="sub-heading">
        <img src={folder} alt="experience-icon" />
        Personal Projects
      </p>
      <div className="projects m-21">
        <div className="card">
          <p className="sub-title">Project 01</p>
          <p className="sub-heading m-15">Re-Book</p>
          <p className="body-txt">
            Online library Site that helps user to buy, sell and get delivered
            the book. Added special feature where user can return the book and
            get the half of the price depend upon the condition of the book and
            date of buy.
          </p>
          <div className="m-21">
            <button className="button-secondary">ReactJS</button>
            <button className="button-secondary">SCSS</button>
            <button className="button-secondary">Redux</button>
          </div>
          <button className="button-primary">
            Demo
            <img src={external} alt="send-icon" />
          </button>
          <button className="button-primary">
            Code
            <img src={gitHub} alt="send-icon" />
          </button>
        </div>
      </div>
      <div className="projects m-21">
        <div className="card">
          <p className="sub-title">Project 02</p>
          <p className="sub-heading m-15">Netflix - V2</p>
          <p className="body-txt">
            Built a website by cloning the Netflix by using 'Rapid API' and
            added special feature of filtering the movies based on user
            mood.added feature of 'Top 10 film recommend' on each genre based on
            IMDB rating.
          </p>
          <div className="m-20">
            <button className="button-secondary">React JS</button>
            <button className="button-secondary">Tailwind CSS</button>
            <button className="button-secondary">Shimmer UI</button>
            <button className="button-secondary">Rapid API</button>


          </div>
          <button className="button-primary">
            Demo
            <img src={external} alt="send-icon" />
          </button>
          <button className="button-primary">
            Code
            <img src={gitHub} alt="send-icon" />
          </button>
        </div>
      </div>
      <div className="projects m-21">
        <div className="card">
          <p className="sub-title">Project 03</p>
          <p className="sub-heading m-15">ToDo</p>
          <p className="body-txt">
            A minimal website that handle the task management for better
            productivity.this will let user to add the task, get reminder,
            prioritising and Re- arrange them.added login feature to the app to
            create account.
          </p>
          <div className="m-20">
            <button className="button-secondary">React JS</button>
            <button className="button-secondary">Bootstrap</button>
            <button className="button-secondary">Redux</button>

          </div>
          <button className="button-primary">
            Demo
            <img src={external} alt="send-icon" />
          </button>
          <button className="button-primary">
            Code
            <img src={gitHub} alt="send-icon" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Projects;
