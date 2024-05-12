import Logo from '../icons/Logo'
import React, { useState, useEffect } from 'react';
import '../styles/NavBar.css'
import Home from './home/Home'
import AboutUs from './aboutUs/AboutUs'
import Service from './services/Service'
import Hero from './services/Hero'



function NavBar() {
  
  const [componentRender, setComponentRender] = useState(<Home/>);
  
  const handleClickButton1 = () => {
    setComponentRender(<Home/>)
  };
  
    const handleClickButton2 = () => {
      setComponentRender(<AboutUs/>)
    };

    const handleClickButton3 = () => {
      setComponentRender(<Service/>)
    };

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [componentRender]);
    

    return (
      <>
        <header>
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
        </header>
        <main>
          {componentRender}
        </main>
      </>
    )
  }
  
  export default NavBar
  
  