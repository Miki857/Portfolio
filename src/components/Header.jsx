import React, { useState } from 'react'
import './css/header.css'

const Header = ({setPage}) => {
    const showMenu = () => {
        const ul__container = document.querySelector(".ul__container");
        ul__container.classList.toggle("hiddenTransition");
    }

    const changePage = (page, openMenu) => {
        //TAREAS:
        //1.CAMBIAR LA PAGINA.
        //2.ABRIR/CERRAR MENU SI ES QUE SE DEBE.

        setPage(page);//1.
        if(openMenu){showMenu();}//2.
    }

    //DARK MODE:--------------------------------------------------------------------------------------------------------
    const [colorMode, setColorMode] = useState("light");
    const changeLight = () => {
        // Get the root element
        var r = document.querySelector(':root');
        if(colorMode == "light"){
            //CHANGE TO DARK MODE:
            r.style.setProperty('--bg-color', '#313131');
            r.style.setProperty('--text-color', 'white');
            setColorMode("dark");
        }else{
            //CHANGE TO LIGHT MODE:
            r.style.setProperty('--bg-color', 'white');
            r.style.setProperty('--text-color', 'black');
            setColorMode("light");
        }
    }

    return (
        <header className='header'>
            {/* Distribucion en Mobile */}
            <div className='mobile__distribution flex justify-between align-center'>
                <i className='height-fitContent bx bx-code-alt bx-md'></i>
                <h2 className='cursor-pointer' onClick={() => changePage("Main", false)}>Miguel CASTILLO</h2>
                <i className='menuBtn height-fitContent bx bx-menu bx-md cursor-pointer' onClick={showMenu}></i>
            </div>
           
            
            {/* Distribucion en Desktop */}
            <div className='desktop__distribution justify-between align-center'>
                <div className='flex align-center gap-00_5'>
                    <i className='height-fitContent bx bx-code-alt bx-md'></i>{/* Icono </> */}
                    <h2 className='cursor-pointer' onClick={() => changePage("Main", false)}>Miguel CASTILLO</h2>
                </div>

                <ul className='flex justify-center align-center gap-02'>
                    <li className='flex gap-00_5 align-center cursor-pointer' onClick={() => changePage("Skills", false)}><i className='height-fitContent bx bx-git-merge bx-md cursor-pointer' ></i>Skills</li>
                    <li className='flex gap-00_5 align-center cursor-pointer' onClick={() => changePage("Proyects", false)}><i className='height-fitContent bx bx-cube bx-md cursor-pointer' ></i>Proyects</li>
                    <li className='flex gap-00_5 align-center cursor-pointer' onClick={() => changePage("Education", false)}><i className='height-fitContent bx bx-library bx-md cursor-pointer' ></i>Education</li>
                    <li className='flex gap-00_5 align-center cursor-pointer' onClick={() => changePage("Resume", false)}><i className='height-fitContent bx bxs-file-blank bx-md'></i>Resume</li>
                </ul>

                <i onClick={() => changeLight()} className='height-fitContent bx bx-moon bx-md'></i>
            </div>

            {/* ESTO ES EL MENU ESCONDIDO */}
            <div className='ul__container hiddenTransition'>
                <ul className='flex flex-column gap-02'>
                    <li className='flex gap-01 align-center cursor-pointer' onClick={() => changePage("Skills", true)}><i className='height-fitContent bx bx-git-merge bx-md cursor-pointer' ></i>Skills</li>
                    <li className='flex gap-01 align-center cursor-pointer' onClick={() => changePage("Proyects", true)}><i className='height-fitContent bx bx-cube bx-md cursor-pointer' ></i>Proyects</li>
                    <li className='flex gap-01 align-center cursor-pointer' onClick={() => changePage("Education", true)}><i className='height-fitContent bx bx-library bx-md cursor-pointer' ></i>Education</li>
                    <li className='flex gap-01 align-center cursor-pointer' onClick={() => changePage("Resume", true)}><i className='height-fitContent bx bxs-file-blank bx-md'></i>Resume</li>
                </ul>
            </div>
        </header>
    )
}

export default Header;