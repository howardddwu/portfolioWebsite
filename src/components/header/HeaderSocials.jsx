import React from 'react'
import { BsLinkedin, BsGithub } from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://www.linkedin.com/in/howardddwu1920441b6/" target='_blank' rel="noreferrer"><BsLinkedin /></a>
      <a href="https://github.com/howardddwu" target='_blank' rel="noreferrer"><BsGithub /></a>
    </div>
  )
}

export default HeaderSocials