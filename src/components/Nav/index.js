import React from "react";
import "./style.css";
// import image from "../../utils/photos/brand.jpg";

function Nav() {
  return (
    <div>
    <div class='navHeading'>
    <div id='nav-title'>Will Wojeck</div><br />
    <div id='nav-links'>
      <div class='nav-link' id='bio'>Bio</div>
      <div class='nav-link' id='projects'>Projects</div>
      <div class='nav-link' id='resume'>Resume</div>
      <div class='nav-link' id='contact'>Contact</div>
    </div>
    </div>
    </div>
  );
}

export default Nav;
