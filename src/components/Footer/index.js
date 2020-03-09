import React from "react";
import "./style.css";
import github from '../../utils/images/icons/github.png';
import linkedin from '../../utils/images/icons/linkedin.png'

const footerIcon = {
  width: '5%',
  margin: '1%'
}

const footerTray = {
  marginLeft: '45.5%',
  marginTop: '3%'
}

const footerText = {
  textAlign: 'left'
}

function Footer() {
  return (
      <div>
          <div style={footerTray}>
            <a href='https://github.com/chillbuilds'><img style={footerIcon} src={github} alt=''></img></a>
            <a href='https://www.linkedin.com/in/willwojeck770'><img style={footerIcon} src={linkedin} alt=''></img></a><br /><br />
            <p style={footerText}>Copyright 2020</p>
          </div>
      </div>
  );
}

export default Footer;
