import React from 'react'
import './css/mainPersonal.css'

const MainPersonal = () => {
    return (
        <>
            <section className='personal__section flex flex-column justify-center align-center'>
                <h1>Miguel CASTILLO,</h1>
                <p className='margin-top-00_5'>Hello! I am a self-taught Front-End and Back-End developer based in Peru.</p>
                <div className='margin-top-01 flex gap-01'>
                    <a href="https://github.com/Miki857" target='_blank'><i className='height-fitContent bx bxl-github bx-md'></i></a>
                    <a href="https://www.linkedin.com/in/mcwebdeveloper/" target='_blank'><i className='height-fitContent bx bxl-linkedin bx-md' ></i></a>
                    
                </div>
            </section>
        </>
    )
}

export default MainPersonal