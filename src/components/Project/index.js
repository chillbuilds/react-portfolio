import React from "react";
import "./style.css";
import githubIcon from '../../utils/images/icons/github.png';

const project = {
    paddingBottom: '20px'
  }

const projectTitle = {
    position: 'relative',
    paddingRight: '20px',
    fontSize: '40px',
    fontWeight: '400',
    marginBottom: '3%',
  }

const icon = {
    position: 'relative',
    float: 'left',
    width: '50px',
    padding: '5px',
    opacity: '0.7',
    zIndex: '10'
}

const desc = {
    paddingBottom: '3%',
    borderBottom: '2px solid rgba(0,0,0,0.2)'
}

function Project(props) {
    const prop = props.children
  return (
    <div>
        <div style={project}>
            <div style={projectTitle}>{prop.title}</div>
            <a href={prop.deployed} rel="noopener noreferrer" target="_blank">
                <img alt="" className='propImg' src={prop.image}/>
            </a>
            <a href={prop.github} rel="noopener noreferrer" target="_blank">
                <div class="gitLink">
                    <img src={githubIcon} alt="" style={icon}/>
                </div>
            </a>
                <div style={desc}>{prop.desc}</div>
        </div>
    </div>
  );
}

export default Project;
