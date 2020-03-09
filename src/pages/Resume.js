import React from "react";
import image from "../utils/images/Resume.png";
import pdf from "../utils/Resume.pdf"

const pageMargins = {
  marginTop: '5%',
  marginLeft: '5%',
  marginRight: '5%',
  width: '80%',
  background: 'rgba(0, 0, 0, 0.2)',
  padding: '2% 5%',
  borderRadius: '6px',
  fontSize: '22px'
};

const pdfLink = {
    color: 'white',
    position: 'relative',
    background: 'rgba(0, 0, 0, 0.2)',
    padding: '10px'
}

const imgStyle = {
    width: '100%',
    paddingTop: '3%'
}

function Resume() {

  return (
    <div>
      <div style={pageMargins}>
      <a style={pdfLink} href={pdf} download={pdf}>download</a>
      <img src={image} style={imgStyle} alt=""></img>
      </div>
    </div>
  );
}

export default Resume;
