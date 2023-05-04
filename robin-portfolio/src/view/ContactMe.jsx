import React from "react";
import NavBar from "../component/NavBar";

function ContactMe() {
  return (
    <div className="contact-me-page">
      <NavBar />
      <img
        alt="Email icon"
        className="icon"
        src={require("../image/email_icon.png")}
      ></img>
      <p className="header-text">Contact Me</p>
      <p className="paragraph-text">
        I am always open to new business opportunities. If you are interested in
        working with me, or if you have any questions, I welcome you to send me
        a message at the email listed below. Feel free to also connect with me
        on LinkedIn. I am happy to share references upon request.
      </p>
      <div className="contact-info-container">
        <p className="dash-separator">⸻</p>
        <p className="paragraph-text">
          <span style={{ color: "gray", marginRight: "5px" }}>Email:</span>
          <a
            style={{ color: "rgb(220,127,50)" }}
            href="mailto:robin.lynne.salomon@gmail.com"
          >
            robin.lynne.salomon@gmail.com
          </a>
        </p>
        <p className="paragraph-text">
          <span>
            Connect with me on LinkedIn
            <a
              style={{ color: "rgb(220,127,50)", marginLeft: "4px" }}
              target="_blank"
              href="https://www.linkedin.com/in/robin-l-salomon/"
            >
              here
            </a>
            <span style={{ textDecoration: "none" }}>.</span>
          </span>
        </p>
        <p className="dash-separator">⸻</p>
      </div>
    </div>
  );
}

export default ContactMe;
