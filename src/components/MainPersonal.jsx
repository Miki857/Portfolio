import React, { useRef } from 'react'
import './css/mainPersonal.css'
import photo from "./img/photo01-T.png";

const MainPersonal = () => {
    //SHOW MESSAGE:
    const container = useRef();
    const showMessage = (value) => {
      if(value == "open"){
        container.current.classList.remove("hiddenOpacity");
        container.current.style = "display: flex";
      }else{
        container.current.classList.add("hiddenOpacity");
        container.current.style = "display: none";
      }
    };

    return (
        <section id='personal' className='personal__section'>
            <div className='landingInfo flex flex-column align-center gap-01'>
                <div>
                    <h2>Nice to meet you!</h2>
                    <h2>I'm Miguel CASTILLO.</h2>
                    <p className='margin-top-00_5'>A self-taught Front-End developer based in Peru.</p>
                </div>
                <div className='margin-top-01 flex gap-01'>
                    <a href="https://github.com/Miki857" target='_blank'><i className='height-fitContent bx bxl-github bx-md'></i></a>
                    <a href="https://www.linkedin.com/in/mcwebdeveloper/" target='_blank'><i className='height-fitContent bx bxl-linkedin bx-md' ></i></a>
                </div>
                <div className='flex align-center gap-01'>
                  <a href='#resume' className='button cursor-pointer'>HIRE ME</a>
                  <p onClick={() => showMessage("open")} className='cursor-pointer'>Download CV</p>
                </div>
            </div>
            
            {/* HIDDEN MESSAGE */}
            <div className='container flex align-center justify-center hiddenOpacity' ref={container}>
                <div className='flex flex-column gap-01 align-center justify-center'>
                <p>For security reasons, I have chosen not to include the CV in this space. If you require it, please send me a private message.</p>
                <button className='button cursor-pointer' onClick={() => showMessage("close")}>Close</button>
                </div>
            </div>

            {/* PHOTO */}
            <div className='photo__container'>
                <img src={photo} alt="" id='photo'/>
            </div>
        </section>
    )
}

export default MainPersonal