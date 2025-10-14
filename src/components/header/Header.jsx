import React from 'react'
import './header.css'
import CTA from './CTA'
import self from '../../asset/self.jpg'
import HeaderSocials from './HeaderSocials'
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Haoyuan Wu</h1>
        <h3>(Howard)</h3>
        <h5 className='text-light'>QA Engineer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={self} alt="me" />
        </div>
        <a href="#contact" className='scroll__down'>Scrool Down</a>
      </div>
    </header>
  )
}

export default Header