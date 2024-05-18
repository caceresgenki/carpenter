import Logo from '../icons/Logo'
import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import '../styles/NavBar.css'
import Home from './home/Home'
import AboutUs from './aboutUs/AboutUs'
import Service from './services/Service'
import Menu from '../icons/Menu'


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

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };
  
  const closeModal = () => {
    setModalIsOpen(false);
  };

  

    return (
      <>
        <header>
          <nav className="navbar">
            <div className='containerLogo'>
              <a className="logo" onClick={() => {handleClickButton1(); closeModal();}}>
                <Logo/>
              </a>
            </div>
            <div className="sections">  
              <ul className='listMenu'>
                <li className='sectionButton'><a onClick={handleClickButton1}>Inicio</a></li>
                <li className='sectionButton'><a onClick={handleClickButton2}>Nosotros</a></li>
                <li className='sectionButton'><a onClick={handleClickButton3}>Servicios</a></li>
              </ul>
              <div>
                <a onClick={openModal}>
                  <Menu classMenu='icon iconMenu' />
                </a>
                <div>
                  <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    contentLabel='typeModal'
                    className='menuModal'>
                      <ul className='listModal'>
                        <li className='sectionButtonModal'><a onClick={() => {handleClickButton1(); closeModal();}}>Inicio</a></li>
                        <li className='sectionButtonModal'><a onClick={() => {handleClickButton2(); closeModal();}}>Nosotros</a></li>
                        <li className='sectionButtonModal'><a onClick={() => {handleClickButton3(); closeModal();}}>Servicios</a></li>
                      </ul>
                    <a className='closeModal' onClick={closeModal}>X</a>
                  </Modal>
                </div>
              </div>
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
  
  