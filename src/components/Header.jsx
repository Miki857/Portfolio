import React, { useRef } from 'react'
import './css/header.css'

const Header = () => {
    const showMenu = () => {
        const ul__container = document.querySelector(".ul__container");
        ul__container.classList.toggle("hiddenTransition");
    }

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
        <header className='header'>
            {/* Distribucion en Mobile */}
            <div className='mobile__distribution flex justify-between align-center'>
                <i className='height-fitContent bx bx-code-alt bx-md'></i>
                <h2 className='cursor-pointer'>Miguel CASTILLO</h2>
                <i className='menuBtn height-fitContent bx bx-menu bx-md cursor-pointer' onClick={showMenu}></i>
            </div>
           
            
            {/* Distribucion en Desktop */}
            <div className='desktop__distribution justify-between align-center'>
                <a href="#personal" className='flex align-center gap-00_5'>
                    <i className='height-fitContent bx bx-code-alt bx-md'></i>{/* Icono </> */}
                    <h4 className='cursor-pointer'>Miguel CASTILLO</h4>
                </a>

                <ul className='flex justify-center align-center gap-02'>
                    <a href="#skills">
                        <li className='flex gap-00_5 align-center cursor-pointer'>
                            <i className='height-fitContent bx bx-git-merge bx-md cursor-pointer' ></i>
                            Skills
                        </li>
                    </a>
                    <a href="#projects">
                        <li className='flex gap-00_5 align-center cursor-pointer'><i className='height-fitContent bx bx-cube bx-md cursor-pointer' ></i>Proyects</li>
                    </a>
                    <a href="#education">
                        <li className='flex gap-00_5 align-center cursor-pointer'><i className='height-fitContent bx bx-library bx-md cursor-pointer' ></i>Education</li>
                    </a>
                    <a href="#resume">
                        <li className='flex gap-00_5 align-center cursor-pointer'><i className='height-fitContent bx bxs-file-blank bx-md'></i>Resume</li>
                    </a>
                </ul>
            </div>

            {/* ESTO ES EL MENU ESCONDIDO */}
            <div className='ul__container hiddenTransition'>
                <i className='closeBTN bx bx-x bx-lg cursor-pointer' onClick={() => showMenu()}></i>
                <ul className='flex flex-column gap-02'>
                    <a href='#skills' onClick={() => showMenu()}><li className='flex gap-01 align-center cursor-pointer'><i className='height-fitContent bx bx-git-merge bx-md cursor-pointer' ></i>Skills</li></a>
                    <a href='#projects' onClick={() => showMenu()}><li className='flex gap-01 align-center cursor-pointer'><i className='height-fitContent bx bx-cube bx-md cursor-pointer' ></i>Proyects</li></a>
                    <a href='#education' onClick={() => showMenu()}><li className='flex gap-01 align-center cursor-pointer'><i className='height-fitContent bx bx-library bx-md cursor-pointer' ></i>Education</li></a>
                    <a href='#resume' onClick={() => showMenu()}><li className='flex gap-01 align-center cursor-pointer'><i className='height-fitContent bx bxs-file-blank bx-md'></i>Contact</li></a>
                    <li className='flex' onClick={() => showMenu()}>
                        <p onClick={() => showMessage("open")} className='cursor-pointer'>Download CV</p>
                    </li>
                </ul>
            </div>
      
            {/* HIDDEN MESSAGE */}
            <div className='container flex align-center justify-center hiddenOpacity' ref={container}>
                <div className='flex flex-column gap-01 align-center justify-center'>
                <p>For security reasons, I have chosen not to include the CV in this space. If you require it, please send me a private message.</p>
                <button className='button cursor-pointer' onClick={() => showMessage("close")}>Close</button>
                </div>
            </div>
        </header>
    )
}

export default Header;