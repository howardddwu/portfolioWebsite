import React from 'react'
import './footer.css'
import { AiFillFacebook, AiFillInstagram } from 'react-icons/ai'
const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">HOWARD WU</a>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__social">
        <a href="https://www.facebook.com/home.php" target='_blank'><AiFillFacebook /></a>
        <a href="https://www.instagram.com/howarddddwu/" target='_blank'><AiFillInstagram /></a>
      </div>
      <div className="footer__copyright">
        <small>&copy;Howardddwu. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer