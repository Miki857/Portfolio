import React from 'react'
import './css/education.css'

const MainEducation = () => {
  return (
    <>
        <section className='education__section flex flex-column justify-center align-center gap-01'>
            <h2>Education</h2>
            {/* FUNDAMENTS CERTIFICATE */}
            <div className='card flex flex-column gap-01'>
                <div className='flex justify-between align-center'><h3>Foundations in HTML, CSS, and Javascript.</h3><a href="https://certiwise.co/verify/5157" target='_blank'><i className='height-fitContent bx bx-link bx-md'></i></a></div>

                <hr className='hr__card'/>

                <div className='container flex gap-01'>
                    <i className='height-fitContent bx bxl-javascript bx-md cursor-pointer' ></i>
                    <i className='height-fitContent bx bxl-html5 bx-md cursor-pointer' ></i>
                    <i className='height-fitContent bx bxl-css3 bx-md cursor-pointer' ></i>
                </div>
            </div>
        </section>
    </>
  )
}

export default MainEducation