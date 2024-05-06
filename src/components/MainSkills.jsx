import React from 'react'
import './css/skills.css'

const MainSkills = () => {
  return (
    <section className='skills__section flex flex-column justify-center gap-02'>
        <h2>Skills</h2>

        <div className='container'>
            <p>Programming Languages</p>
            <hr className='skills_HR'/>
            <div className='cards__container flex flex-column gap-01'>
                <div className='card flex align-center'><p>JAVASCRIPT</p></div>
            </div>  
        </div>

        <div className='container'>
            <p>Markup & Style</p>
            <hr className='skills_HR'/>
            <div className='cards__container flex flex-column gap-01'>
                <div className='card flex align-center'><p>HTML</p></div>
                <div className='card flex align-center'><p>CSS</p></div>
            </div>
        </div>

        <div className='container'>
            <p>Libraries</p>
            <hr className='skills_HR'/>
            <div className='cards__container flex flex-column gap-01'>
                <div className='card flex align-center'><p>REACT</p></div>
            </div>
        </div>

        <div className='container'>
            <p>Methodology</p>
            <hr className='skills_HR'/>
            <div className='cards__container flex flex-column gap-01'>
                <div className='card flex align-center'><p>BEM</p></div>
            </div>
        </div>
    </section>
  )
}

export default MainSkills