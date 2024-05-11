import React from 'react'
import './css/mainPersonal.css'
import photo from "./img/photo01-T.png";

const MainPersonal = () => {
    return (
        <section id='personal' className='personal__section'>
            <div className='landingInfo flex flex-column align-center gap-01'>
                <div>
                    <h2>Nice to meet you!</h2>
                    <h2>I'm Miguel CASTILLO.</h2>
                    <p className='margin-top-00_5'>A self-taught Front-End developer based in Peru.</p>
                </div>
                <div className='margin-top-01 flex gap-01'>
                    <a href="https://github.com/Miki857" target='_blank'><i className='height-fitContent bx bxl-github bx-md'></i></a>
                    <a href="https://www.linkedin.com/in/mcwebdeveloper/" target='_blank'><i className='height-fitContent bx bxl-linkedin bx-md' ></i></a>
                </div>
                <a href='#resume' className='button cursor-pointer'>HIRE ME</a>
            </div>
            {/* PHOTO */}
            <div className='photo__container'>
                <img src={photo} alt="" id='photo'/>
            </div>
        </section>
    )
}

export default MainPersonal