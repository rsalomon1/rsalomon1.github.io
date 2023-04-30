import React from 'react'
import "../css/stylesheet.css"



function LandingPage() {

  return (
    <div>
    <div className='page-container'>
    <p className="robin-salomon-name" >Robin Salomon</p>
    <p className="web-developer" >Full Stack Web Developer</p>
    
    <div className='landing-page-menu-container'>
      
    <p className='menu-item'>About</p>
    <p style={{color:"#FF926A"}}className='menu-item'>|</p>
    <p className='menu-item'>Services</p>
    <p style={{color:"#FF926A"}} className='menu-item'>|</p>
    <p className='menu-item'>Contact</p>
    </div>
    </div>
    </div>
  )
}

export default LandingPage