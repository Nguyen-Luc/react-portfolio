import React from 'react'

function ProgressBar(props) {
  // Class parent : experience.jsx
  console.log(props)
  return (
    <div>
      <h3>{props.title}</h3>
      <div className="years">
        <span>Year of experience</span>
        <span>1 an</span>
        <span>2 ans</span>
      </div>
      <div>
        {props.development.map(item => {
          let xpYears = 2
          let progressBar = (item.xp / xpYears) * 100 + '%'

          return (
            <div key={item.id} className="languagesList">
              <li>{item.value}</li>

              <div className="progressBar" style={{ width: progressBar }}></div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ProgressBar
