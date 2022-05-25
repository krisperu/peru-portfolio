import React from 'react'
import { Link } from 'react-router-dom'

function Projects() {
  return (
    <div className="project-container">
        <div className="project-card">
        <div>
            <a href="https://beforeidieapp.herokuapp.com/" target="_blank" rel="noopener noreferrer">Before I Die</a>
        </div>
            <img className="img-crd" src="https://res.cloudinary.com/dhqfwgeap/image/upload/v1653421550/abnnn8x510qrhnuvgbwm.png" alt="Before I Die" />
        </div>
        <div className="project-card">
            <div>
                <a href="https://furbaby-sitters-club.herokuapp.com/" target="_blank" rel="noopener noreferrer">Furbaby Sitters Club</a>
            </div>
            <img className="img-crd" src="https://res.cloudinary.com/dhqfwgeap/image/upload/v1653421593/llxx5ek29iozckxripmk.png" alt="Furbaby Sitters Club" />
        </div>
        <div className="project-card">
            <div>
                <a href="https://github.com/krisperu/Reader" target="_blank" rel="noopener noreferrer">Reader</a>
            </div>
            <img className="img-crd" src="https://res.cloudinary.com/dhqfwgeap/image/upload/v1653421727/rbvuzsawgvqxmkbrfvsu.png" alt="Reader" />
        </div>
        <div className="project-card">
            <div>
                <a href="https://github.com/Skywrithin/Phase-2-project" target="_blank" rel="noopener noreferrer">Project Hopper</a>
            </div>
            <img className="img-crd" src="https://res.cloudinary.com/dhqfwgeap/image/upload/v1653421494/su4sh4wp1e3n9f7cqwag.png" alt="Project Hopper" />
        </div>
        <div className="project-card">
            <div>
                <a href="https://github.com/jkap100/phase-1-project" target="_blank" rel="noopener noreferrer">Watch Out</a>
            </div>
            <img className="img-crd" src="https://res.cloudinary.com/dhqfwgeap/image/upload/v1653511748/mjmz4pvnddxhxsxh2oys.png" alt="Project Hopper" />
        </div>
    </div>
  )
}

export default Projects