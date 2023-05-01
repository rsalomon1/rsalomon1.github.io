import React from "react";
import { useNavigate } from "react-router-dom";
function NavBar() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="navbar-container">
        <p onClick={() => navigate("/")} className="menu-item-navbar">
          Home
        </p>
        <p style={{ color: "rgb(220,127,50)" }} className="menu-item-navbar">
          |
        </p>
        <p onClick={() => navigate("/about")} className="menu-item-navbar">
          About
        </p>
        <p style={{ color: "rgb(220,127,50)" }} className="menu-item-navbar">
          |
        </p>
        <p onClick={() => navigate("/services")} className="menu-item-navbar">
          Services
        </p>
        <p style={{ color: "rgb(220,127,50)" }} className="menu-item-navbar">
          |
        </p>
        <p onClick={() => navigate("/contact")} className="menu-item-navbar">
          Contact
        </p>
      </div>
    </div>
  );
}

export default NavBar;
