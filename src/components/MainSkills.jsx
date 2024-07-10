import React from 'react';
import './css/skills.css';
import js_logo from './img/js-logo.png';
import html_logo from './img/html5-logo.png';
import sass_logo from './img/sass-logo.png';
import postgresql_logo from './img/postgresql-logo.png';
import css_logo from './img/css3-logo.png';
import nodejs_logo from './img/nodejs-logo.png';
import react_logo from './img/react-logo.png';

const MainSkills = () => {
  return (
    <section className='skills__section' id='skills'>
        <div className='skills__section__container'>
            <div className='innerContainer'>
                <h3>JAVASCRIPT</h3>
                <h5>1 Year Expereince</h5>
            </div>
            <img src={js_logo} alt="Logo" />
        </div>
        <div className='skills__section__container'>
            <div className='innerContainer'>
                <h3>HTML</h3>
                <h5>1 Year Expereince</h5>
            </div>
            <img src={html_logo} alt="Logo" />
        </div>
        <div className='skills__section__container'>
            <div className='innerContainer'>
                <h3>CSS</h3>
                <h5>1 Year Expereince</h5>
            </div>
            <img src={css_logo} alt="Logo" />
        </div>
        <div className='skills__section__container'>
            <div className='innerContainer'>
                <h3>REACT</h3>
                <h5>1 Year Expereince</h5>
            </div>
            <img src={react_logo} alt="Logo" />
        </div>
        <div className='skills__section__container'>
            <div className='innerContainer'>
                <h3>POSTGRESQL</h3>
                <h5>1 Year Expereince</h5>
            </div>
            <img src={postgresql_logo} alt="Logo" />
        </div>
        <div className='skills__section__container'>
            <div className='innerContainer'>
                <h3>SASS</h3>
                <h5>1 Year Expereince</h5>
            </div>
            <img src={sass_logo} alt="Logo" />
        </div>
        <div className='skills__section__container'>
            <div className='innerContainer'>
                <h3>NODEJS</h3>
                <h5>1 Year Expereince</h5>
            </div>
            <img src={nodejs_logo} alt="Logo" />
        </div>
    </section>
  )
}

export default MainSkills