import React from "react";
import "./style.css";
// import image from "../../utils/photos/brand.jpg";

function Nav() {
  return (
    <div>
    <div id='nav-title'>Will Wojeck</div><br />
    <div id='nav-links'>
      <div className='nav-link' id='bio'><a href='/'>Bio</a></div>
      <div className='nav-link' id='projects'><a href='/projects'>Projects</a></div>
      <div className='nav-link' id='resume'><a href='/resume'>Resume</a></div>
      <div className='nav-link' id='contact'><a href='/contact'>Contact</a></div>
    </div>
    </div>
  );
}

export default Nav;
