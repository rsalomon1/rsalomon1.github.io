import React from "react";
import NavBar from "./NavBar";
function AboutMe() {
  return (
    <div>
        <NavBar/>
      <div className="about-me-container">
        <img src={require("../images/robin_salomon_circle_headshot.png")}></img>
      </div>
      <p className="header-text">About Me</p>
      <div className="text-content">
      <p className="p-font">
        I'm a Full Stack Web Developer with a non-traditional backround in
        tech. It wasn't until my mid-thirties when I decided to transition
        into the field. I had wanted to do this for some time, but I
        wasn't quite sure how to make the leap.
        <br/>
        <br/>
        I first developed an interest in web development in 2012 when I supported
        a web redesign project for a public health consulting firm where I had worked
        at the time. I provided content expertise to the development team, and acted 
        as a liason across stakeholders in the project. As I became closer with 
        the development team and grew fond of their personalities, 
        I thought to myself, "I really want to be a part 
        of this crowd." My interest in the field grew, and as more time went
        by on the project, I found myself fixing technical aspects of the site that
        the team didn't expect me to resolve. I realized that I enjoyed that type of work, 
        and I began wishing I had gone down a different career path,
        which, up to that time, had been in customer service, project coordination, and
        Spanish/English bilingual communications and translation.
        <br/>
        <br/>
        It wasn't until 2021 when I learned about a full stack web
        development boot camp opportunity that 
        guaranteed a position as a Junior Developer upon successful completion. 
        Around that time, I had been working in a different position at a university, but 
        my desire for a career switch had been growing, and I ultimately quit my job to 
        participate in the boot camp, which was a rigorous
        full-time commitment that lasted for three months. 
        <br/>
        <br/>
        I graduated in April 2022, and was hired on as a Junior Developer by the
        company that ran the boot camp, marking
        the start of my professional journey in tech. As I worked on different projects,
        I became particularly interested in UI/UX design and front-end technologies. 
        I developed a passion for creating user interfaces that are friendly and intuitive.
        I am very grateful for making a transition into the field, 
        and I am so excited to see what else lies ahead for me in this industry. 
  
        </p>
        </div>
    </div>
  );
}

export default AboutMe;
