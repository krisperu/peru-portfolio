import React from 'react'
import Projects from './Projects'
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

function App() {
  return (
    <div className="App">
      <Fade right cascade>
        <h1 className="title">Kristina Peru</h1>
      </Fade>
      <h2>About Me</h2>
      <p>My name is Kristina Peru. I am a software engineer based in Denver, Colorado.</p>
      <h2>Skills</h2>
        <div className="skill-cont">
          <Fade top cascade>
            <div className="skill">JavaScript</div>
            <div className="skill">React</div>
            <div className="skill">Ruby</div>
            <div className="skill">Rails</div>
            <div className="skill">HTML</div>
            <div className="skill">CSS</div>
            <div className="skill">SQLite</div>
            <div className="skill">Active Record</div>
          </Fade>
        </div>
      <h2>Projects</h2>
      <Projects />
      <h2>Contact Me</h2>
        <div className="contact-cont">
          <div className="contact">krissy.germanov@gmail.com</div>
          <div className="divider"/>
          <div className="contact">
            <a href="https://www.linkedin.com/in/kristina-peru/" target="_blank" rel="noopener noreferrer">Linked In</a>
          </div>
          <div className="divider"/>
          <div className="contact">
            <a href="https://github.com/krisperu" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
          <div className="divider"/>
          <div className="contact">
            <a href="https://huntr.co/p/kristina-peru" target="_blank" rel="noopener noreferrer">Huntr</a>
          </div>
          <div className="divider"/>
          <div className="contact">
            <a href="https://docs.google.com/document/d/e/2PACX-1vTyhjeUg9HsquV_xLDq2pomMyzIgTsdyRVb8wW7yaXYpyELZbaeMsl3sedu5dZ9vuxipq-j9iFAAsTm/pub" target="_blank" rel="noopener noreferrer">Resume</a>
          </div>
          <div className="divider"/>
          <div className="contact">
            <a href="https://dev.to/krisperu" target="_blank" rel="noopener noreferrer">Blog</a>
          </div>
        </div>
        <br></br>
    </div>
  );
}

export default App;
