import React from 'react';
import '../stylesheets/App.css';
import Home from '../pages/Home.js'
import Projects from '../pages/Projects.js'
import AboutMe from '../pages/AboutMe.js'
import Contact from '../pages/Contact.js'

import header from '../images/header.png'

function App() {
  function homeRoute(){
    setRouter(0);
    document.getElementById("homeButton").style.color = "red";
    document.getElementById("contactButton").style.color = "white";
    document.getElementById("aboutButton").style.color = "white";
    document.getElementById("projectsButton").style.color = "white";
  }

  function projectsRoute(){
    setRouter(1);
    document.getElementById("projectsButton").style.color = "red";
    document.getElementById("homeButton").style.color = "white";
    document.getElementById("aboutButton").style.color = "white";
    document.getElementById("contactButton").style.color = "white";
  }

  function aboutRoute(){
    setRouter(2);
    document.getElementById("aboutButton").style.color = "red";
    document.getElementById("homeButton").style.color = "white";
    document.getElementById("contactButton").style.color = "white";
    document.getElementById("projectsButton").style.color = "white";
  }

  function contactRoute(){
    setRouter(3);
    document.getElementById("contactButton").style.color = "red";
    document.getElementById("homeButton").style.color = "white";
    document.getElementById("aboutButton").style.color = "white";
    document.getElementById("projectsButton").style.color = "white";
  }

  const [router, setRouter] = React.useState(0);
  return (
    <div className="App">
      <nav className="App-header">
        <img src={header}></img>
      </nav>
      <ul className="App-navbar">
        <li><button id="homeButton" onClick={homeRoute}>Home</button></li>
        <li><button id="projectsButton" onClick={projectsRoute}>Projects</button></li>
        <li><button id="aboutButton" onClick={aboutRoute}>About Me</button></li>
        <li><button id="contactButton" onClick={contactRoute}>Contact</button></li>
      </ul>
      <div className="App-body">
        { router===0 ? <Home/> : 
        router===1 ? <Projects/> :
        router===2 ? <AboutMe/> :
        router===3 ? <Contact/> : 
        null }
      </div>
    </div>
  );
}

export default App;
