import React from 'react'
import './css/proyects.css';
import img1 from "./img/e-commerce.png";
import img2 from "./img/pokedex.png";
import img3 from "./img/weather-app.png";
import img4 from "./img/netflix.png";
import img5 from "./img/crudUsersTest.png";
import img6 from "./img/ageCalculator.png";
import img7 from "./img/RPS.png";
import img8 from "./img/galletasFortuna.png";
import img9 from "./img/natours.png";

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
                <div className='flex justify-between'>
                  <h5>HTML - REACT - CSS - JAVASCRIPT</h5>
                  <div className='flex gap-01'>
                    <a target='_blank' href="https://e-commerce-mc.netlify.app/"><i className='bx bx-link-external bx-sm'></i></a>
                    <a target='_blank' href="https://github.com/Miki857/e-commerce"><i className='bx bxl-github bx-sm' ></i></a>
                  </div>
                </div> 
            </div>
            {/* NATOURS */}
            <div className='card flex flex-column gap-01'>
                <img src={img9} alt="natours" />

                <h4>Natours APP</h4>  
                <div className='flex justify-between'>
                  <h5>HTML - REACT - CSS</h5>
                  <div className='flex gap-01'>
                    <a target='_blank' href="https://mc-natours.netlify.app/"><i className='bx bx-link-external bx-sm'></i></a>
                    <a target='_blank' href="https://github.com/Miki857/Natours"><i className='bx bxl-github bx-sm' ></i></a>
                  </div>
                </div> 
            </div>
            {/* POKEDEX */}
            <div className='card flex flex-column gap-01'>
                <img src={img2} alt="e-commerce" />

                <h4>POKEDEX</h4>  
                <div className='flex justify-between'>
                  <h5>HTML - REACT - CSS - JAVASCRIPT</h5>
                  <div className='flex gap-01'>
                    <a target='_blank' href="https://pokedex-foo.netlify.app/"><i className='bx bx-link-external bx-sm'></i></a>
                    <a target='_blank' href="https://github.com/Miki857/pokedex"><i className='bx bxl-github bx-sm' ></i></a>
                  </div>
                </div> 
            </div>
            {/* WEATHER APP */}
            <div className='card flex flex-column gap-01'>
                <img src={img3} alt="e-commerce" />

                <h4>Weather App</h4>
                <div className='flex justify-between'>
                  <h5>HTML - REACT - CSS - JAVASCRIPT</h5>
                  <div className='flex gap-01'>
                    <a target='_blank' href="https://miky-weatherapp.netlify.app/"><i className='bx bx-link-external bx-sm'></i></a>
                    <a target='_blank' href="https://github.com/Miki857/entregable-02"><i className='bx bxl-github bx-sm' ></i></a>
                  </div>
                </div> 
            </div>
            {/* NETFLIX */}
            <div className='card flex flex-column gap-01'>
                <img src={img4} alt="e-commerce" />

                <h4>Netflix Landing Page</h4>
                <div className='flex justify-between'>
                  <h5>HTML - REACT - CSS - JAVASCRIPT</h5>
                  <div className='flex gap-01'>
                    <a target='_blank' href="https://netflix-mc.netlify.app/"><i className='bx bx-link-external bx-sm'></i></a>
                    <a target='_blank' href="https://github.com/Miki857/Netflix"><i className='bx bxl-github bx-sm' ></i></a>
                  </div>
                </div> 
            </div>
            {/* CRUD Users Test */}
            <div className='card flex flex-column gap-01'>
                <img src={img5} alt="e-commerce" />

                <h4>CRUD Users Test</h4>
                <div className='flex justify-between'>
                  <h5>HTML - REACT - CSS - JAVASCRIPT</h5>
                  <div className='flex gap-01'>
                    <a target='_blank' href="https://crud-users-page.netlify.app/"><i className='bx bx-link-external bx-sm'></i></a>
                    <a target='_blank' href="https://github.com/Miki857/entregable-04"><i className='bx bxl-github bx-sm' ></i></a>
                  </div>
                </div> 
            </div>
            {/* AGE CALCULATOR */}
            <div className='card flex flex-column gap-01'>
                <img src={img6} alt="e-commerce" />

                <h4>AGE CALCULATOR</h4>
                <div className='flex justify-between'>
                  <h5>HTML - CSS - JAVASCRIPT</h5>
                  <div className='flex gap-01'>
                    <a target='_blank' href="https://miki857.github.io/age-calculator-app-main/"><i className='bx bx-link-external bx-sm'></i></a>
                    <a target='_blank' href="https://github.com/Miki857/age-calculator-app-main"><i className='bx bxl-github bx-sm' ></i></a>
                  </div>
                </div> 
            </div>
            {/* ROCK PAPER SCISSORS */}
            <div className='card flex flex-column gap-01'>
                <img src={img7} alt="e-commerce" />

                <h4>ROCK PAPER SCISSORS</h4>
                <div className='flex justify-between'>
                  <h5>HTML - REACT - CSS - JAVASCRIPT</h5>
                  <div className='flex gap-01'>
                    <a target='_blank' href="https://miki-rockpaperscissors.netlify.app/"><i className='bx bx-link-external bx-sm'></i></a>
                    <a target='_blank' href="https://github.com/Miki857/RockPaperScissors"><i className='bx bxl-github bx-sm' ></i></a>
                  </div>
                </div> 
            </div>
            {/* GALLETAS DE LA FORTUNA */}
            <div className='card flex flex-column gap-01'>
                <img src={img8} alt="img" />

                <h4>GALLETAS DE LA FORTUNA</h4>
                <div className='flex justify-between'>
                  <h5>HTML - REACT - CSS - JAVASCRIPT</h5>
                  <div className='flex gap-01'>
                    <a target='_blank' href="https://react-entregable-01.netlify.app/"><i className='bx bx-link-external bx-sm'></i></a>
                    <a target='_blank' href="https://github.com/Miki857/entregable-01"><i className='bx bxl-github bx-sm' ></i></a>
                  </div>
                </div> 
            </div>
        </div>
    </section>
  )
}

export default MainProyects