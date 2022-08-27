import React from 'react'
import './portfolio.css'
import IMG1 from '../../asset/portfolio1.JPG'
import IMG2 from '../../asset/portfolio3.jpeg'
import IMG3 from '../../asset/portfolio2.gif'
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My React Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Fever Tourism</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/howardddwu/Web-Design-Project" className='btn' target='_blank'>Github</a>
            <a href="https://jovial-raindrop-fa762f.netlify.app/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>GradZero Student System</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/ZhengXiaohu98/graduate_system" className='btn' target='_blank'>Github</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>Sorting Visualization</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/howardddwu/PythonVisualization" className='btn' target='_blank'>Github</a>
          </div>
        </article>

      </div>
    </section>
  )
}

export default Portfolio