import React from "react";
import "../css/stylesheet.css";
import { useNavigate } from "react-router-dom";
function LandingPage() {
  const navigate = useNavigate();
  return (
    <div className="landing-page">
      <div className="landing-page-content-container">
        <p className="robin-salomon-name">Robin Salomon</p>
        <p className="profession-title">Full Stack Web Developer</p>

        <div className="landing-page-menu-container">
          <p
            style={{ color: "rgb(220,127,50)" }}
            className="landing-page-menu-item"
          >
            ⸻
          </p>
          <p
            onClick={() => navigate("/about")}
            className="landing-page-menu-item"
          >
            About
          </p>

          <p
            onClick={() => navigate("/services")}
            className="landing-page-menu-item"
          >
            Services
          </p>

          <p
            onClick={() => navigate("/contact")}
            className="landing-page-menu-item"
          >
            Contact
          </p>
          <p
            style={{ color: "rgb(220,127,50)" }}
            className="landing-page-menu-item"
          >
            ⸻
          </p>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
