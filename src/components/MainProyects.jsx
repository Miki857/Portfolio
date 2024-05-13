import React from 'react'
import './css/proyects.css';
import img1 from "./img/e-commerce.png";
import img2 from "./img/pokedex.png";
import img3 from "./img/weather-app.png";
import img4 from "./img/netflix.png";

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

                <a href="https://e-commerce-mc.netlify.app/" target='_blank'><h4>E-Commerce</h4></a>    
                <h5>HTML - REACT - CSS - JAVASCRIPT</h5>
            </div>
            {/* POKEDEX */}
            <div className='card flex flex-column gap-01'>
                <img src={img2} alt="e-commerce" />

                <a href="https://pokedex-foo.netlify.app/" target='_blank'><h4>POKEDEX</h4></a>    
                <h5>HTML - REACT - CSS - JAVASCRIPT</h5>
            </div>
            {/* WEATHER APP */}
            <div className='card flex flex-column gap-01'>
                <img src={img3} alt="e-commerce" />

                <a href="https://miky-weatherapp.netlify.app/" target='_blank'><h4>Weather App</h4></a>    
                <h5>HTML - REACT - CSS - JAVASCRIPT</h5>
            </div>
            {/* NETFLIX */}
            <div className='card flex flex-column gap-01'>
                <img src={img4} alt="e-commerce" />

                <a href="https://netflix-mc.netlify.app/" target='_blank'><h4>Netflix Landing Page</h4></a>    
                <h5>HTML - REACT - CSS - JAVASCRIPT</h5>
            </div>
        </div>
    </section>
  )
}

export default MainProyects