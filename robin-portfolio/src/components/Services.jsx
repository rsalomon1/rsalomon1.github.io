import React from 'react'
import NavBar from './NavBar'
function Services() {
  return (
    <div>
        <NavBar />
        <div>
        <img className="icon" src={require("../images/handshake_icon.png")}></img>
        <p className="header-text">How I Can Help</p>
        </div>
    </div>
  )
}

export default Services