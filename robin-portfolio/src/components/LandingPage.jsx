import React from "react";
import "../css/stylesheet.css";
import { useNavigate } from 'react-router-dom';
function LandingPage() {
  const navigate = useNavigate();
  return (
    <div className="landing-page">
      <div className="page-container">
        <p className="robin-salomon-name">Robin Salomon</p>
        <p className="web-developer">Full Stack Web Developer</p>

        <div className="landing-page-menu-container">
          <p style={{ color: "rgb(220,127,50)" }} className="menu-item">
            ⸻
          </p>
          <p onClick={() => navigate("/about")} className="menu-item">About</p>

          <p onClick={() => navigate("/services")}  className="menu-item">Services</p>

          <p onClick={() => navigate("/contact")}  className="menu-item">Contact</p>
          <p style={{ color:"rgb(220,127,50)" }} className="menu-item">
            ⸻
          </p>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
