import React from 'react'
import { FaAward } from 'react-icons/fa'
import { IoMdSchool } from 'react-icons/io'
import { BiFolderOpen } from 'react-icons/bi'
import me from '../../asset/self2.jpg'
import './about.css'
const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className="about__me">
          <div className="about__me-image">
            <img src={me} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small> 3+ Years Coding</small>
            </article>
            <article className='about__card'>
              <IoMdSchool className='about__icon' />
              <h5>Education</h5>
              <small> The City College of New York</small>
            </article>
            <article className='about__card'>
              <BiFolderOpen className='about__icon' />
              <h5>Projects</h5>
              <small>10+ completed</small>
            </article>
          </div>
          <p>
            Hi everyone, this Haoyuan Wu. I am currently seeking an opportunity in software development. I have a strong foundation in software development and a good understanding of algorithms and databases. 
            I have a good understanding of the MERN(MongoDB, Express, React, Node) stack with several projects. Besides, I am currently self-learning IOS development as well so I am familiar with Swift and XCode. 
            I am currently working as a QA analyst and am interested in transitioning to a software development role where I can leverage my skills and experience to contribute to innovative projects and grow within a dynamic team.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk!</a>

        </div>
      </div>
    </section>
  )
}

export default About
