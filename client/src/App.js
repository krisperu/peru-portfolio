import React from 'react'
import Projects from './Projects'
import Fade from 'react-reveal/Fade';

function App() {
  return (
    <div className="App">
      <Fade right cascade>
        <h1 className="title">Kristina Peru</h1>
      </Fade>
      <h2>About Me</h2>
      <p>My name is Kristina Peru. I am a software engineer based in Denver, Colorado.</p>
      <h2>Projects</h2>
      <Projects />
      <h2>Skills</h2>
        <div>JavaScript</div>
        <div>React</div>
        <div>Ruby</div>
        <div>Rails</div>
        <div>HTML</div>
        <div>CSS</div>
        <div>SQLite</div>
        <div>Active Record</div>
      <h2>Contact Me</h2>
        <div>krissy.germanov@gmail.com</div>
        <div>Linked In</div>
        <div>GitHub</div>
        <div>Huntr</div>
        <div>Resume</div>
        <div>Blog</div>
    </div>
  );
}

export default App;
