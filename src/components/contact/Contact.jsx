import React from 'react'
import { HiOutlineMail } from 'react-icons/hi'
import { AiOutlineWechat, AiOutlineWhatsApp } from 'react-icons/ai'
import './contact.css'
import { useRef } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_8xnvbhj', 'template_5czp0kd', form.current, '-dVvAnlUwzQaoQFyr')
      .then((result) => {
        console.log(result.text)
      }, (error) => {
        console.log(error.text)
      })

    e.target.reset()
  }


  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <HiOutlineMail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>howardddwu@gmail.com</h5>
            <a href="mailto:howardddwu@gmail.com" target='_blank'>Send a message</a>
          </article>
          <article className='contact__option'>
            <AiOutlineWhatsApp className='contact__option-icon' />
            <h4>Whatsapp</h4>
            <h5>9293316701</h5>
            <a href="https://api.whatsapp.com/send?phone=19293316701" target='_blank'>Send a message</a>
          </article>
          <article className='contact__option'>
            <AiOutlineWechat className='contact__option-icon' />
            <h4>WeChat</h4>
            <h5>WeChat ID: howardddwu</h5>
            <a href="https://web.wechat.com/?lang=en" target='_blank'>Add as friend</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>

          <input type="text" name="name" placeholder='Your Full Name' required />

          <input type="email" name="email" placeholder='Your Email Address' required />

          <textarea name="message" rows='7' placeholder='Your Message' required />
          <button type='submit' className='btn btn-primary'> Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact