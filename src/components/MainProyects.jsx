import React from 'react'
import './css/proyects.css'

const MainProyects = () => {
  return (
    <>
        <section className='projects__section flex flex-column justify-center align-center gap-02'>
            <h2>Proyects</h2>

            <div className='cards__container flex flex-wrap justify-evenly gap-02'>
                {/* E-COMMERCE */}
                <div className='card flex flex-column gap-01'>
                    <div className='flex justify-between align-center'><h2>E-Commerce</h2><a href="
    https://e-commerce-mc.netlify.app/" target='_blank'><i className='height-fitContent bx bx-link bx-md'></i></a></div>
                    
                    <hr className='hr__card'/>

                    <p>E-Commerce using CRUD, API's, REACT-REDUX, REACT-FORM.</p>

                    <hr className='hr__card'/>

                    <div className='container flex gap-01'>
                        <i className='height-fitContent bx bxl-react bx-md cursor-pointer'></i>
                        <i className='height-fitContent bx bxl-javascript bx-md cursor-pointer' ></i>
                        <i className='height-fitContent bx bxl-html5 bx-md cursor-pointer' ></i>
                        <i className='height-fitContent bx bxl-css3 bx-md cursor-pointer' ></i>
                    </div>
                </div>
                {/* RICK AND MORTY CARD */}
                <div className='card flex flex-column gap-01'>
                    <div className='flex justify-between align-center'><h2>Rick and Morty</h2><a href="https://rickandmorty-page.netlify.app/" target='_blank'><i className='height-fitContent bx bx-link bx-md'></i></a></div>
                    
                    <hr className='hr__card'/>

                    <p>Queries to an API with the data of the series through search inputs for characters, places, universes in the series.</p>

                    <hr className='hr__card'/>

                    <div className='container flex gap-01'>
                        <i className='height-fitContent bx bxl-react bx-md cursor-pointer'></i>
                        <i className='height-fitContent bx bxl-javascript bx-md cursor-pointer' ></i>
                        <i className='height-fitContent bx bxl-html5 bx-md cursor-pointer' ></i>
                        <i className='height-fitContent bx bxl-css3 bx-md cursor-pointer' ></i>
                    </div>
                </div>
                {/* WEATHER */}
                <div className='card flex flex-column gap-01'>
                    <div className='flex justify-between align-center'><h2>Weather App</h2><a href="https://miky-weatherapp.netlify.app/" target='_blank'><i className='height-fitContent bx bx-link bx-md'></i></a></div>
                    
                    <hr className='hr__card'/>

                    <p>Queries to a weather API with the user's data, either their own or that of a city.</p>

                    <hr className='hr__card'/>

                    <div className='container flex gap-01'>
                        <i className='height-fitContent bx bxl-react bx-md cursor-pointer'></i>
                        <i className='height-fitContent bx bxl-javascript bx-md cursor-pointer' ></i>
                        <i className='height-fitContent bx bxl-html5 bx-md cursor-pointer' ></i>
                        <i className='height-fitContent bx bxl-css3 bx-md cursor-pointer' ></i>
                    </div>
                </div>
                {/* ROCK PAPER SCISSORS */}
                <div className='card flex flex-column gap-01'>
                    <div className='flex justify-between align-center'><h2>Rock Paper Scissors</h2><a href="
    https://miki-rockpaperscissors.netlify.app/" target='_blank'><i className='height-fitContent bx bx-link bx-md'></i></a></div>
                    
                    <hr className='hr__card'/>

                    <p>Wanna Play?</p>

                    <hr className='hr__card'/>

                    <div className='container flex gap-01'>
                        <i className='height-fitContent bx bxl-react bx-md cursor-pointer'></i>
                        <i className='height-fitContent bx bxl-javascript bx-md cursor-pointer' ></i>
                        <i className='height-fitContent bx bxl-html5 bx-md cursor-pointer' ></i>
                        <i className='height-fitContent bx bxl-css3 bx-md cursor-pointer' ></i>
                    </div>
                </div>
                {/* POKEDEX */}
                <div className='card flex flex-column gap-01'>
                    <div className='flex justify-between align-center'><h2>POKEDEX</h2><a href="https://pokedex-foo.netlify.app/" target='_blank'><i className='height-fitContent bx bx-link bx-md'></i></a></div>
                    
                    <hr className='hr__card'/>

                    <p>Did you catch them all?</p>

                    <hr className='hr__card'/>

                    <div className='container flex gap-01'>
                        <i className='height-fitContent bx bxl-react bx-md cursor-pointer'></i>
                        <i className='height-fitContent bx bxl-javascript bx-md cursor-pointer' ></i>
                        <i className='height-fitContent bx bxl-html5 bx-md cursor-pointer' ></i>
                        <i className='height-fitContent bx bxl-css3 bx-md cursor-pointer' ></i>
                    </div>
                </div>
                {/* CRUD */}
                <div className='card flex flex-column gap-01'>
                    <div className='flex justify-between align-center'><h2>CRUD Test</h2><a href="
    https://crud-users-page.netlify.app/" target='_blank'><i className='height-fitContent bx bx-link bx-md'></i></a></div>
                    
                    <hr className='hr__card'/>

                    <p>CRUD(Create-Read-Update-Delete) Test.</p>

                    <hr className='hr__card'/>

                    <div className='container flex gap-01'>
                        <i className='height-fitContent bx bxl-react bx-md cursor-pointer'></i>
                        <i className='height-fitContent bx bxl-javascript bx-md cursor-pointer' ></i>
                        <i className='height-fitContent bx bxl-html5 bx-md cursor-pointer' ></i>
                        <i className='height-fitContent bx bxl-css3 bx-md cursor-pointer' ></i>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default MainProyects