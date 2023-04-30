import React from 'react'
import { useNavigate } from 'react-router-dom';
function NavBar() {
    const navigate = useNavigate();
  return (
   <div>
        <p onClick={() => navigate("/contact")}>Contact Me</p>
   </div>
  )
}

export default NavBar;