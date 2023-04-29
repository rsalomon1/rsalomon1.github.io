import React from 'react'
import { useNavigate, Link } from 'react-router-dom'

function LandingPage() {
    const navigate = useNavigate();
  return (
    <div>
    <div>Robin Salomon's deployed portfolio</div>
    <p onClick={() => navigate("/contact")}>Contact Me</p>
    </div>
  )
}

export default LandingPage