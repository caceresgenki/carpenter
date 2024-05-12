import Logo from '../icons/Logo'
import '../styles/NavBar.css'
import Home from './home/Home'
import AboutUs from './aboutUs/AboutUs'
import Service from './services/Service'
import { useState } from 'react';






function NavBar() {
  
    return (
      <>
        <nav className="navbar">
              <div className='containerLogo'>
                  <a className="logo" >
                      <Logo/> 
                  </a>
              </div>
              <div className="sections">  
                  <a>Inicio</a>
                  <a>Nosotros</a>
                  <a>Servicios</a>
              </div>
        </nav>
      </>
    )
  }
  
  export default NavBar
  
  