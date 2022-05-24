import React from 'react'
import Fade from 'react-reveal/Fade';

function Projects() {
  return (
    <Fade left cascade>
        <div className="project-container">
            <div className="project-card">
            <div>Before I Die</div>
            <img className="img-crd" src="https://res.cloudinary.com/dhqfwgeap/image/upload/v1653421550/abnnn8x510qrhnuvgbwm.png" alt="Before I Die" />
            </div>
            <div className="project-card">
                <div>Furbaby Sitters Club</div>
                <img className="img-crd" src="https://res.cloudinary.com/dhqfwgeap/image/upload/v1653421593/llxx5ek29iozckxripmk.png" alt="Furbaby Sitters Club" />
            </div>
            <div className="project-card">
                <div>Reader</div>
                <img className="img-crd" src="https://res.cloudinary.com/dhqfwgeap/image/upload/v1653421727/rbvuzsawgvqxmkbrfvsu.png" alt="Reader" />
            </div>
            <div className="project-card">
                <div>Project Hopper</div>
                <img className="img-crd" src="https://res.cloudinary.com/dhqfwgeap/image/upload/v1653421494/su4sh4wp1e3n9f7cqwag.png" alt="Project Hopper" />
            </div>
            <div className="project-card">
                <div>Watch Out</div>
                <img className="img-crd" src="https://res.cloudinary.com/dhqfwgeap/image/upload/v1653421494/su4sh4wp1e3n9f7cqwag.png" alt="Project Hopper" />
            </div>
        </div>
    </Fade>
  )
}

export default Projects