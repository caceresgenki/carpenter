import Logo from '../icons/Logo'
import React, { useState, useEffect } from 'react';
import '../styles/NavBar.css'
import Home from './home/Home'
import AboutUs from './aboutUs/AboutUs'
import Service from './services/Service'
// import {Hero} from './services/Hero'


// function handleClick(handleClick) {
//   setComponentRender(<Home/>);
// }


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
              <ul className='listMenu'>
                <li className='sectionButton'><a onClick={handleClickButton1}>Inicio</a></li>
                <li className='sectionButton'><a onClick={handleClickButton2}>Nosotros</a></li>
                <li className='sectionButton'><a onClick={handleClickButton3}>Servicios</a></li>
              </ul>
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
  
  