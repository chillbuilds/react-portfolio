import React from "react";

const pageMargins = {
    marginTop: '5%',
    marginLeft: '5%',
    marginRight: '5%',
    width: '80%',
    background: 'rgba(0, 0, 0, 0.2)',
    padding: '2% 5%',
    borderRadius: '6px',
    fontSize: '22px'
  }

const inputField = {
    padding: '20px',
  }

const input = {
    fontSize: '26px',
    width: '80%',
    border: 'none',
    background: 'rgba(0, 0, 0, .3)',
    borderRadius: '8px'
}

const contactBtn = {
    color: 'white',
    fontSize: '26px',
    marginLeft: '20px',
    border: 'none',
    background: 'rgba(0, 0, 0, .3)',
    borderRadius: '8px',
    padding: '10px',
    marginTop: '5%'
}

function Contact() {

  return (
    <div>
        <div style={pageMargins}>
        <h1>Contact</h1>
            <div style={inputField}>
              <input style={input} type="text" placeholder="name" />
            </div>
            <div style={inputField}>
              <input style={input} type="number" placeholder="phone" />
            </div>
            <div style={inputField}>
              <input style={input} type="text" placeholder="email" />
            </div>
            <button style={contactBtn}>Submit</button>
        </div>
    </div>
  );
}

export default Contact;
