import React from "react";
import NavBar from "./NavBar";

function ContactMe() {
  return (
    <div className="contact-me-page">
      <NavBar />
      <img className="icon" src={require("../images/email_icon.png")}></img>
      <p className="header-text">Contact Me</p>
      <p className="p-font">
        I am always open to new business opportunities. If you are interested in
        working with me, or if you have any questions, I welcome you to send me
        a message at the email listed below. Feel free to also connect with me
        on LinkedIn. I am happy to share references upon request.
      </p>
      <div className="bullets-container">
        <p style={{ color: "rgb(220,127,50)" }} className="bullet-points">
          ⸻
        </p>
        <p style={{ color: "rgb(220,127,50)" }} className="p-font">
          <span style={{ color: "gray", marginRight: "5px" }}>Email:</span>{" "}
          <a
            style={{ color: "rgb(220,127,50)" }}
            href="mailto:robin.lynne.salomon@gmail.com"
          >
            robin.lynne.salomon@gmail.com
          </a>
        </p>
        <p className="p-font">
          <span>
            Connect with me on LinkedIn{" "}
            <a
              style={{ color: "rgb(220,127,50)", textDecoration: "underline" }}
              target="_blank"
              href="https://www.linkedin.com/in/robin-l-salomon/"
            >
              {" "}
              here
            </a>
            <span style={{ textDecoration: "none" }}>.</span>
          </span>
        </p>
        <p style={{ color: "rgb(220,127,50)" }} className="bullet-points">
          ⸻
        </p>
      </div>
    </div>
  );
}

export default ContactMe;
