import React from "react";

function AboutMe() {
  return (
    <div>
      <div className="about-me-container">
        <img src={require("../images/robin_salomon_circle_headshot.png")}></img>
      </div>
      <p className="header-text">About Me</p>
      <p className="p-font">
        I'm a Full Stack Web Developer who has a non-traditional backround in
        tech. It wasn't until my mid-thirties when I decided to make my tech career
        transition. I had wanted to do this for some time, but I
        wasn't quite sure how to make the leap.
        <br/>
        <br/>
        I first developed an interest in web development in 2012 when I supported
        a web redesign project for a public health consulting firm where I had worked
        at that time. I provided content expertise to the development team, and acted 
        as a liason across stakeholders in the project. As I became closer with 
        the development team, I thought to myself, "I really want to be a part 
        of this crowd." My interest in the field grew, and as more time went
        by on the project, I found myself fixing technical aspects of the site that
        the team didn't expect me to resolve. I realized that I enjoyed that type of work 
        and solving technical problems, and I began to wish I had gone a different career route,
        which until that time, had been in customer service, project coordination, and
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
        I became particularly interestd in UI/UX design and front-end technologies. 
        Stemming from my characteristic as an empathetic person, I really enjoyed
        creating user interfaces that were friendly and intuitive. 
        <br/>
        <br/>
        I am very grateful for having participated in the boot camp, even though it 
        came with so many sacrifices. I am so excited to see what other opportunites
        present themselves in my tech career.
        <br/>
        <br/>
        A few fun, non-techie facts about me: I'm a huge animal lover and a gym
        fanatic, and I enjoy spending time with family and, of course, eating 
        yummy, vegan food. I'm originally from the Washington, DC area, and 
        went to college at American University where I majored in Spanish Studies.
        </p>
    </div>
  );
}

export default AboutMe;
