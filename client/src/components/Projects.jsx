import React from 'react'

function Projects() {
  return (
    <div className="project-container">
        <a href="https://beforeidieapp.herokuapp.com/" target="_blank" rel="noopener noreferrer">
            <div className="project-card">
                <div>Before I Die</div>
                <img className="img-crd" src="https://res.cloudinary.com/dhqfwgeap/image/upload/v1653421550/abnnn8x510qrhnuvgbwm.png" alt="Before I Die"/>
            </div>
        </a>
        <a href="https://furbaby-sitters-club.herokuapp.com/" target="_blank" rel="noopener noreferrer">
            <div className="project-card">
                <div>Furbaby Sitters Club</div>
                <img className="img-crd" src="https://res.cloudinary.com/dhqfwgeap/image/upload/v1653421593/llxx5ek29iozckxripmk.png" alt="Furbaby Sitters Club"/>
            </div>
        </a>
        <a href="https://github.com/krisperu/Reader" target="_blank" rel="noopener noreferrer">
            <div className="project-card">
                <div>Reader</div>
                <img className="img-crd" src="https://res.cloudinary.com/dhqfwgeap/image/upload/v1653421727/rbvuzsawgvqxmkbrfvsu.png" alt="Reader"/>
            </div>
        </a>
        <a href="https://github.com/Skywrithin/Phase-2-project" target="_blank" rel="noopener noreferrer">
            <div className="project-card">
                <div>Project Hopper</div>
                <img className="img-crd" src="https://res.cloudinary.com/dhqfwgeap/image/upload/v1653421494/su4sh4wp1e3n9f7cqwag.png" alt="Project Hopper"/>
            </div>
        </a>
        <a href="https://github.com/jkap100/phase-1-project" target="_blank" rel="noopener noreferrer">
            <div className="project-card">
                <div>Watch Out</div>
                <img className="img-crd" src="https://res.cloudinary.com/dhqfwgeap/image/upload/v1653511748/mjmz4pvnddxhxsxh2oys.png" alt="Watch Out"/>
            </div>
        </a>
    </div>
  )
}

export default Projects