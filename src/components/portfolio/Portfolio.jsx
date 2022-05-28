import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'
// DO NOT USE THE IMAGES IN PROTION

const Portfolio = () => {
  const data = [
    {
      id: 1,
      image: IMG1,
      title: 'Crypto Currency Dashboard & Financial Visuallisation',
      github: 'https://github.com/Nguyen-Luc',
      demo: 'http://google.com',
    },
    {
      id: 2,
      image: IMG2,
      title: 'Charts templates & infographics in Figma',
      github: 'https://github.com/Nguyen-Luc',
      demo: 'http://google.com',
    },
    {
      id: 3,
      image: IMG3,
      title: 'Figma dashboard UI kit for data design web apps',
      github: 'https://github.com/Nguyen-Luc',
      demo: 'http://google.com',
    },
    {
      id: 4,
      image: IMG4,
      title: 'Maintaining tasks and tracking progress',
      github: 'https://github.com/Nguyen-Luc',
      demo: 'http://google.com',
    },
    {
      id: 5,
      image: IMG5,
      title: 'Charts Templates & infographics in Figma',
      github: 'https://github.com/Nguyen-Luc',
      demo: 'http://google.com',
    },
    {
      id: 6,
      image: IMG6,
      title: 'Charts & infographics in Figma',
      github: 'https://github.com/Nguyen-Luc',
      demo: 'http://google.com',
    },
  ]
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__irem-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Demo
                </a>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Portfolio
