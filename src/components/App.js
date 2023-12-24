import React from 'react';
import logo from '../logo.svg';
import '../stylesheets/App.css';
import Home from '../pages/Home.js'
import Projects from '../pages/Projects.js'
import AboutMe from '../pages/AboutMe.js'
import Contact from '../pages/Contact.js'


function App() {
  function homeRoute(){
    setRouter(0);
  }

  function projectsRoute(){
    setRouter(1);
  }

  function aboutRoute(){
    setRouter(2);
  }

  function contactRoute(){
    setRouter(3);
  }

  const [router, setRouter] = React.useState(0);
  return (
    <div className="App">
      <nav>
        <button onClick={homeRoute}>Home</button>
        <button onClick={projectsRoute}>Projects</button>
        <button onClick={aboutRoute}>About Me</button>
        <button onClick={contactRoute}>Contact</button>
      </nav>
      
      { router===0 ? <Home/> : 
      router===1 ? <Projects/> :
      router===2 ? <AboutMe/> :
      router===3 ? <Contact/> : 
      null }
    </div>
  );
}

export default App;
