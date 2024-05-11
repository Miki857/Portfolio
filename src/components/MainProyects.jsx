import React from 'react'
import './css/proyects.css';
import img1 from "./img/e-commerce.png";
import img2 from "./img/pokedex.png";
import img3 from "./img/weather-app.png";

const MainProyects = () => {
  return (
    <section id='projects' className='projects__section flex flex-column gap-02'>
        <div className='flex justify-between align-center'>
          <h2>Proyects</h2>
          <a href='#resume' className='button cursor-pointer'>HIRE ME</a>
        </div>

        <div className='cards__container flex flex-wrap justify-between gap-02'>
            {/* E-COMMERCE */}
            <div className='card flex flex-column gap-01'>
                <img src={img1} alt="e-commerce" />

                <h4>E-Commerce</h4>    
                <h5>HTML - REACT - CSS - JAVASCRIPT</h5>

                <div className='container flex gap-01'>
                </div>
            </div>
            {/* POKEDEX */}
            <div className='card flex flex-column gap-01'>
                <img src={img2} alt="e-commerce" />

                <h4>POKEDEX</h4>    
                <h5>HTML - REACT - CSS - JAVASCRIPT</h5>

                <div className='container flex gap-01'>
                </div>
            </div>
            {/* WEATHER APP */}
            <div className='card flex flex-column gap-01'>
                <img src={img3} alt="e-commerce" />

                <h4>Weather App</h4>    
                <h5>HTML - REACT - CSS - JAVASCRIPT</h5>

                <div className='container flex gap-01'>
                </div>
            </div>
        </div>
    </section>
  )
}

export default MainProyects