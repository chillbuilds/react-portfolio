import React from "react";

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

function Index() {

  return (
    <div>
      <div style={pageMargins}>
            <h1>Bio</h1>
            After a decade of wandering, unsatisfied from one career opportunity
            to the next I believe I'll be sitting tight with coding and
            robotics. I've flirted with these 2 for ages, and decided in 2017 to
            start pursuing them at the hobby level. I bought an arduino uno,
            attended an intro course at a local maker space, and absolutely fell
            in love.<br /><br />
            For the next couple of years, I spent every bit of expendable income
            on electronic components, tools, and machines to expand my knowledge
            and capabilities in regards to designing and fabricating
            electronics. My areas of focus included 3d printing, 3d design with
            Fusion360, coding with the arduino IDE, and pcb development and
            manufacturing.<br /><br />
            In 2019 I attended the Bay Area Maker Faire to further fraternize
            with the maker/developer community, and was inspired by all of the
            people I met that had successfully made a career out of a passionate
            hobby. Returning home, my drive was set on fire. I needed all of the
            new arduino nano boards, the Nvidia Jetson, an oscilloscope, and to
            dip my toes into machine learning and AI. It was obvious funding and
            education were priority number one, which has sent my down my
            current path of transitioning from print floor management to
            software engineer, and enrolling in a coding bootcamp to solidify
            and expand the basics before treading into more advanced waters.<br /><br />
            In the meantime, let's make some stuff we're excited about.
      </div>
    </div>
  );
}

export default Index;
