import React from "react";
import NavBar from "../component/NavBar";

function Services() {
  return (
    <div>
      <NavBar />
      <div>
        <img
          alt="Handshake icon"
          className="icon"
          src={require("../image/handshake_icon.png")}
        ></img>
        <p style={{ marginTop: "20px" }} className="header-text">
          I'm Here to Help
        </p>
        <div style={{ marginTop: "1.5rem" }}>
          <p className="paragraph-text">
            I'm always happy to put my technical skills to use on new or
            existing projects. As a Full Stack Developer, I can code the
            client-facing aspect of what customers see, in addition to the logic
            that takes place behind-the-scenes.
            <br />
            <br />
            Whether you're starting from scratch on a new site, or you need a
            short consultation on how you can improve a site that already
            exists, I'm here to help.
          </p>
          <p style={{ color: "rgb(220,127,50)" }} className="dash-separator">
            ⸻
          </p>

          <p className="header-text">Technical skills:</p>

          <p style={{ color: "rgb(220,127,50)" }} className="paragraph-text">
            Front-end technologies:
          </p>
          <p
            style={{ marginTop: "1px", marginBottom: "2px" }}
            className="paragraph-text"
          >
            React, JavaScript, HTML, CSS
          </p>
          <p style={{ color: "rgb(220,127,50)" }} className="paragraph-text">
            Back-end technologies:
          </p>
          <p
            style={{ marginTop: "1px", marginBottom: "2px" }}
            className="paragraph-text"
          >
            Java, Spring Boot, SQL
          </p>
          <p style={{ color: "rgb(220,127,50)" }} className="paragraph-text">
            Testing frameworks:
          </p>
          <p
            style={{ marginTop: "1px", marginBottom: "2px" }}
            className="paragraph-text"
          >
            JUnit, Mockito, TestNG
          </p>
        </div>
        <p style={{ color: "rgb(220,127,50)" }} className="dash-separator">
          ⸻
        </p>
      </div>
      <p className="header-text">What you can expect:</p>

      <p className="paragraph-text">
        Responsive design: websites that look good across all devices
      </p>

      <p className="paragraph-text">
        A clean coding style that will make your application easy to maintain
        down the road
      </p>
      <p className="paragraph-text">
        Reliability and timely delivery from start to finish
      </p>
      <p className="paragraph-text">
        Communication and a client-focused approach to work
      </p>
      <p className="paragraph-text">Flexibility with changing needs</p>
      <p style={{ color: "rgb(220,127,50)" }} className="dash-separator">
        ⸻
      </p>
    </div>
  );
}

export default Services;
