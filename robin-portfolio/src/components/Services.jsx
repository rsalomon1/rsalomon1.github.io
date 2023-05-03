import React from "react";
import NavBar from "./NavBar";

function Services() {
  return (
    <div>
      <NavBar />
      <div>
        <img
          className="icon"
          src={require("../images/handshake_icon.png")}
        ></img>
        <p style={{ marginTop: "20px" }} className="header-text">
          I'm Here to Help
        </p>
        <div style={{ marginTop: "1.5rem" }} className="text-content">
          <p className="p-font">
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
          <p style={{ color: "rgb(220,127,50)" }} className="bullet-points">
            ⸻
          </p>
          <div className="bullets-container">
            <p className="header-text">Technical skills:</p>
            <div className="bullets-container">
              <p style={{ color: "rgb(220,127,50)" }} className="p-font">
                Front-end technologies:
              </p>
              <p
                style={{ marginTop: "1px", marginBottom: "2px" }}
                className="p-font"
              >
                React, JavaScript, HTML, CSS
              </p>
              <p style={{ color: "rgb(220,127,50)" }} className="p-font">
                Back-end technologies:
              </p>
              <p
                style={{ marginTop: "1px", marginBottom: "2px" }}
                className="p-font"
              >
                Java, Spring Boot, SQL
              </p>
              <p style={{ color: "rgb(220,127,50)" }} className="p-font">
                Testing frameworks:
              </p>
              <p
                style={{ marginTop: "1px", marginBottom: "2px" }}
                className="p-font"
              >
                JUnit, Mockito, TestNG
              </p>
            </div>
            <p style={{ color: "rgb(220,127,50)" }} className="bullet-points">
              ⸻
            </p>
          </div>
          <p className="header-text">What you can expect:</p>
          <div className="bullets-container">
            <p className="p-font">
              Responsive design: websites that look good across all devices
            </p>

            <p className="p-font">
              A clean coding style that will make your application easy to
              maintain down the road
            </p>
            <p className="p-font">
              Reliability and timely delivery from start to finish
            </p>
            <p className="p-font">
              Communication and a client-focused approach to work
            </p>
            <p className="p-font">Flexibility with changing needs</p>
            <p style={{ color: "rgb(220,127,50)" }} className="bullet-points">
              ⸻
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
