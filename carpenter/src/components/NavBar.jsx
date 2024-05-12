import Logo from '../icons/Logo'
import React, { useState } from 'react';
import '../styles/NavBar.css'
import Home from './home/Home'
import AboutUs from './aboutUs/AboutUs'
import Service from './services/Service'
// import SectionState from './SectionState'



function NavBar() {

    const handleClickButton1 = () => {
      Button1()
    };

    const handleClickButton2 = () => {
      Button2
    };

    const handleClickButton3 = () => {
      Button3
    };
    

    return (
      <>
        <nav className="navbar">
          <div className='containerLogo'>
            <a className="logo" onClick={handleClickButton1}>
              <Logo/>
            </a>
          </div>

          <div className="sections">  
            <a onClick={handleClickButton1}>Inicio</a>
            <a onClick={handleClickButton2}>Nosotros</a>
            <a onClick={handleClickButton3}>Servicios</a>
          </div>

        </nav>
      </>
    )
  }
  
  export default NavBar
  
  