import React, { useRef } from 'react'
import './css/resume.css'

const MainResume = () => {
  return (
    <section id='resume' className='resume__section flex flex-column align-center gap-02'>
      <div className='contact__container'>
        <div className='flex flex-column gap-01'>
          <h2>Contact Me</h2>
          <p>I would love to hear about your project and how I could help. Please fill in the form, and I'll get back to you as soon as posible.</p>
        </div>

        <form className='flex flex-column gap-01' action="https://api.web3forms.com/submit" method="POST">
            <input type="hidden" name="access_key" value="ebe892b7-f600-43b1-8653-68cc5f1fe1b6"/>
            
            <input type="text" className='input' name="name" placeholder='NAME...' required/>
            <input type="email" className='input' name="email" placeholder='EMAIL...' required/>
            <textarea placeholder='MESSAGE...' name="message" className='textarea' cols="40" rows="10" required></textarea>
            <button className='button cursor-pointer'>SEND MESSAGE</button>

            {/* hCaptcha Spam Protection */}
            <div className="h-captcha" data-captcha="true"></div>
        </form>
      </div>

      <div className='contact__container__footer flex justify-between align-center'>
        <a href="#personal" className='flex align-center gap-00_5'>
            <i className='height-fitContent bx bx-code-alt bx-md'></i>{/* Icono </> */}
            <h4 className='cursor-pointer' onClick={() => changePage("Main", false)}>Miguel CASTILLO</h4>
        </a>
        
        <div className='flex gap-01'>
            <a href="https://github.com/Miki857" target='_blank'><i className='height-fitContent bx bxl-github bx-md'></i></a>
            <a href="https://www.linkedin.com/in/mcwebdeveloper/" target='_blank'><i className='height-fitContent bx bxl-linkedin bx-md' ></i></a>
        </div>
      </div>
    </section>
  )
}

export default MainResume