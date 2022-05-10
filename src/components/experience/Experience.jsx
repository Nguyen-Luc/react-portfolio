import React from 'react'
import './experience.css'
import ProgressBar from './ProgressBar'

const Experience = () => {
  // Class enfant (props):ProgressBar.js
  const frontend = [
    { id: 1, value: 'HTML', xp: 1.8 },
    { id: 2, value: 'CSS', xp: 1.6 },
    { id: 3, value: 'JavaScript', xp: 1.8 },
    { id: 4, value: 'Bootstrap', xp: 1.2 },
    { id: 5, value: 'Sass', xp: 0.8 },
  ]
  const backend = [
    { id: 1, value: 'NodeJS', xp: 1.8 },
    { id: 2, value: 'MongoDB', xp: 1.4 },
    { id: 3, value: 'Firebase', xp: 1.1 },
    { id: 4, value: 'PostgreSQL', xp: 0.8 },
    { id: 4, value: 'MySQL', xp: 1.0 },
  ]
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        {/* FrontEnd */}
        <div className="experience__frontend">
          <div className="languagesFrameworks">
            <ProgressBar development={frontend} title="Frontend Development" />
          </div>
        </div>
        {/* BackEnd */}
        <div className="experience__backend">
          <div className="languagesFrameworks">
            <ProgressBar development={backend} title="Backend Development" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
