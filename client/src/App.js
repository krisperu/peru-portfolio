import React from 'react'
import Projects from './components/Projects'
import Bio from './components/Bio'
import Contact from './components/Contact'
import Fader from 'react-reveal/Fade';
import { Animator, ScrollContainer, ScrollPage, batch, Fade, MoveIn, MoveOut, Sticky } from "react-scroll-motion";


function App() {
  return (
    <div className="App">
      <ScrollContainer>
        <ScrollPage page={0}>
          <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
            <Fader right cascade>
              <span className="name">Kristina Peru</span>
            </Fader>
          </Animator>
        </ScrollPage>
        <ScrollPage page={1}>
            <img className="pic" src="https://res.cloudinary.com/dhqfwgeap/image/upload/v1653507849/mxea4pkcy6xslvu42zzl.png" alt="stripe"/>
        </ScrollPage>
        <ScrollPage page={2}>
            <Bio />
        </ScrollPage>
        <ScrollPage page={3}>
          <div className="skills">
            <span>
              <div className="title">Skills</div>
              <Animator animation={MoveIn(-1000, 0)}>JavaScript</Animator>
              <Animator animation={MoveIn(1000, 0)}>React</Animator>
              <Animator animation={MoveIn(-1000, 0)}>Ruby</Animator>
              <Animator animation={MoveIn(1000, 0)}>Rails</Animator>
              <Animator animation={MoveIn(-1000, 0)}>Rest API</Animator>
              <Animator animation={MoveIn(1000, 0)}>HTML</Animator>
              <Animator animation={MoveIn(-1000, 0)}>CSS</Animator>
              <Animator animation={MoveIn(1000, 0)}>SQLite</Animator>
              <Animator animation={MoveIn(-1000, 0)}>Active  Record</Animator>
            </span>
          </div>
        </ScrollPage>
        <ScrollPage page={4}>
            <img className="pic" src="https://res.cloudinary.com/dhqfwgeap/image/upload/v1653507969/uewpbldddydmmupvakt4.png" alt="stripe"/>
        </ScrollPage>
        <ScrollPage page={5}>
          <Fader right cascade><div className="title">Projects</div></Fader>
          <br />
          <Projects />
          <br />
          <span className="title">Contact Me</span>
          <Contact />
          <br />
          <br />
        </ScrollPage>
      </ScrollContainer>
    </div>
  );
}

export default App;
