import React from "react";
import Project from '../components/Project'
import bonezbeatz from '../utils/images/bonez-beatz.JPG'
import flintzskins from '../utils/images/flintz-skins.png'
import weatherapp from '../utils/images/weather-app.JPG'
import curiositypics from '../utils/images/nasa-api.JPG'
import notetaker from '../utils/images/note-taker.png'
import password from '../utils/images/password.JPG'

const pageMargins = {
    marginTop: '5%',
    marginLeft: '15%',
    marginRight: '15%',
    width: '60%',
    background: 'rgba(0, 0, 0, 0.2)',
    padding: '2% 5%',
    borderRadius: '6px',
    fontSize: '22px'
  }

const project1 = {
    title: 'Bonez Beatz',
    image: bonezbeatz,
    desc: 'Bonez Beats is a basic midi pad. The user chooses audio samples from the sound library drop-down list, and assigns the desired audio to a keypress. The user can also record and play back short audio clips.',
    github: 'https://github.com/tzvik15/Bonez-Beatz',
    deployed: 'https://tzvik15.github.io/Bonez-Beatz/'
}

const project2 = {
    title: 'Flintz Skins',
    image: flintzskins,
    desc: 'Flintz Skins is an application that utilizes html canvas to allow the user to select colors and draw images. Further functionality includes allowing the user to record and playback drawings, and download images created with the application locally.',
    github: 'https://github.com/c-frog/Paint-Brush',
    deployed: 'https://flintz-skinz-2.herokuapp.com/'
}

const project3 = {
    title: 'Weather App',
    image: weatherapp,
    desc: `A simple weather forecast app that uses weather data from openweathermap. The user inputs either a city or zip code, and the page populates with the current weather conditions, along with a 5 day forecast. Additional functionality includes auto-saving search history.`,
    github: 'https://github.com/chillbuilds/weather-app',
    deployed: 'https://chillbuilds.com/weather-app/'
}

const project4 = {
    title: 'Curiosity Pics',
    image: curiositypics,
    desc: `An app that requests data from NASA's image database. Specifically, images from the curiosity rover. The user refines the search by typing a date into the input, and selecting a camera. The page populates with all of the images taken on the input date, by the camera the userselected.`,
    github: 'https://github.com/chillbuilds/nasa-api',
    deployed: 'https://chillbuilds.com/nasa-api/'
}

const project5 = {
    title: 'Note Taker',
    image: notetaker,
    desc: `A helpful note taking app that saves a users notes and allows the user to edit and delete notes. Built using express js and deployed to heroku.`,
    github: 'https://github.com/chillbuilds/note-taker',
    deployed: 'https://note-taker-30501.herokuapp.com/'
}

const project6 = {
    title: 'Password Generator',
    image: password,
    desc: `An application that uses vanilla javascript to generate random passwords based on a users input criteria. The user can select from a checklist of options to apply to the generated password, and the user can also copy the generated password to their clipboard with the click of a button. `,
    github: 'https://github.com/heliumface770/password-generator/',
    deployed: 'https://chillbuilds/password-generator/'
}

function Projects() {

  return (
    <div>
      <div style={pageMargins}>
          <h1>Projects</h1>
          <Project>{project1}</Project>
          <Project>{project2}</Project>
          <Project>{project3}</Project>
          <Project>{project4}</Project>
          <Project>{project5}</Project>
          <Project>{project6}</Project>
      </div>
    </div>
  );
}

export default Projects;