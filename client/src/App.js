import React from 'react'
import Projects from './Projects'
import Fader from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, Move, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn } from "react-scroll-motion";


function App() {
  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
  const FadeUp = batch(Fade(), Move(), Sticky());

  return (
    <div className="App">
        {/* <div className="skill-cont">
          <Fader top cascade>
            <div className="skill">JavaScript</div>
            <div className="skill">React</div>
            <div className="skill">Ruby</div>
            <div className="skill">Rails</div>
            <div className="skill">HTML</div>
            <div className="skill">CSS</div>
            <div className="skill">SQLite</div>
            <div className="skill">Active Record</div>
          </Fader>
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
          </div> */}
        {/* </div> */}
        <br></br>
        <ScrollContainer>
          <ScrollPage page={0}>
            <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
              <Fader right cascade>
                <span className="title">Kristina Peru</span>
              </Fader>
            </Animator>
          </ScrollPage>
          <ScrollPage page={1}>
            <Animator animation={ZoomInScrollOut}>
              <span style={{ fontSize: "40px" }}>My name is Kristina Peru. I am a software engineer based in Denver, Colorado. My hobbies include reading, taking walks with my dog,</span>
            </Animator>
          </ScrollPage>
          <ScrollPage page={2}>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }} >
              <span style={{ fontSize: "40px" }}>
                <Animator animation={MoveIn(-1000, 0)}>JavaScript</Animator>
                <Animator animation={MoveIn(1000, 0)}>React</Animator>
                <Animator animation={MoveIn(-1000, 0)}>Ruby</Animator>
                <Animator animation={MoveIn(1000, 0)}>Rails</Animator>Rest API
                <Animator animation={MoveOut(1000, 0)}>HTML</Animator>
                <Animator animation={MoveOut(-1000, 0)}>CSS</Animator>
                <Animator animation={MoveOut(1000, 0)}>SQLite</Animator>
                <Animator animation={MoveOut(-1000, 0)}>Active  Record</Animator>
              </span>
            </div>
          </ScrollPage>
          <ScrollPage page={3}>
            <Projects />
            <Animator animation={FadeUp}>
              <span style={{ fontSize: "40px" }}>Projects</span>
            </Animator>
          </ScrollPage>
          <ScrollPage page={4}>
            <Animator animation={batch(Fade(), Sticky())}>
              <span style={{ fontSize: "40px" }}>Contact Me</span>
              <br/>
              <span style={{ fontSize: "30px" }}>
                  <div className="contact">krissy.germanov@gmail.com</div>
                <div className="contact-cont">
                  {/* <div className="divider"/> */}
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
              </span>
            </Animator>
          </ScrollPage>
        </ScrollContainer>
    </div>
  );
}

export default App;
