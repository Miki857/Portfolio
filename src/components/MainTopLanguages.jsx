import React from 'react'
import './css/mainTopLanguages.css'
import '../atributtes.css'

const MainTopLanguages = () => {
    return (
        <section className='topLanguages__section flex flex-column'>
          <div className='flex gap-01'>
            <div className='hot__skill'>
              <span>HTML5</span>
              <i className='height-fitContent bx bxl-html5 bx-lg' ></i>{/* ICONO HTML */}
            </div>
            
            <div className='hot__skill'>
              <span>JAVASCRIPT</span>
              <i className='height-fitContent bx bxl-javascript bx-lg'></i>{/* ICONO JAVASCRIPT */}
            </div>
            
            <div className='hot__skill'>
              <span>CSS3</span>
              <i className='height-fitContent bx bxl-css3 bx-lg' ></i>{/* ICONO CSS3 */}
            </div>
          </div>
          <h5>Top Lenguajes</h5>
        </section>
    )
}

export default MainTopLanguages