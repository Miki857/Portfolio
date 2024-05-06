import React from 'react'
import './css/resume.css'

const MainResume = () => {
  return (
    <>
        <section className='resume__section flex flex-column justify-center align-center gap-02'>
            <h2>Resume</h2>
            <div className='flex flex-column align-center gap-00_5'>
                <i className='height-fitContent bx bxs-file-blank bx-md cursor-pointer'></i>
                <p>Download CV</p>
            </div>
        </section>
    </>
  )
}

export default MainResume