import React from "react";
import { useNavigate } from "react-router-dom";
function NavBar() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="navbar-container">
        <p onClick={() => navigate("/")} className="navbar-menu-item">
          Home
        </p>
        <p style={{ color: "rgb(220,127,50)" }} className="navbar-menu-item">
          |
        </p>
        <p onClick={() => navigate("/about")} className="navbar-menu-item">
          About
        </p>
        <p style={{ color: "rgb(220,127,50)" }} className="navbar-menu-item">
          |
        </p>
        <p onClick={() => navigate("/services")} className="navbar-menu-item">
          Services
        </p>
        <p style={{ color: "rgb(220,127,50)" }} className="navbar-menu-item">
          |
        </p>
        <p onClick={() => navigate("/contact")} className="navbar-menu-item">
          Contact
        </p>
      </div>
    </div>
  );
}

export default NavBar;
