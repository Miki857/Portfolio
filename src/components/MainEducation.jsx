import React from 'react';
import './css/education.css';
import img1 from "./img/FundationHTML.png"
import img2 from "./img/FundationTYPESCRIPT.png"
import img3 from "./img/FundationREACT.png"

const MainEducation = () => {
  return (
    <>
        <section id='education' className='education__section flex flex-column gap-02'>
            <h2>Education</h2>
            <div>
              <a target='_blank' href="https://certiwise.co/verify/5157"><img src={img1} alt="foundations" /></a>
              <a target='_blank' href="https://certiwise.co/verify/5395"><img src={img3} alt="foundations" /></a>
            </div>
        </section>
    </>
  )
}

export default MainEducation