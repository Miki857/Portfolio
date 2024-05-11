import React from 'react';
import './css/education.css';
import img1 from "./img/FundationHTML.png"
import img2 from "./img/FundationTYPESCRIPT.png"

const MainEducation = () => {
  return (
    <>
        <section id='education' className='education__section flex flex-column gap-02'>
            <h2>Education</h2>
            <div>
              <a target='_blank' href="https://certiwise.co/verify/5157"><img src={img1} alt="foundations" /></a>
              <a target='_blank' href="https://www.udemy.com/certificate/UC-5acdbd5d-1198-4e23-a43b-a43b40cc33d6/"><img src={img2} alt="foundations" /></a>
            </div>
        </section>
    </>
  )
}

export default MainEducation