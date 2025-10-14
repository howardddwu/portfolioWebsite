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
              <small> 2+ Years Software Testing
                <br />
                2+ Years Web/iOS Development
                <br />

              </small>
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
          I’m a Quality Assurance Engineer based in New York with 
          a background in Computer Science and hands-on experience across QA, web, and iOS development. 
          Over the past two years, I’ve focused on ensuring software quality through manual, regression, 
          and API testing, while also building automation frameworks using Playwright, Postman, and TypeScript.
          <br />
          <br />
          My development experience in web and mobile platforms gives me a deeper understanding of 
          how software is built and tested end to end. I enjoy designing test strategies, 
          collaborating with developers, and leveraging automation to improve efficiency and 
          reliability. I’m ISTQB certified and continuously learning new tools and technologies to 
          deliver better, faster, and more scalable testing solutions.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk!</a>

        </div>
      </div>
    </section>
  )
}

export default About
