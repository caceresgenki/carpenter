import Logo from '../icons/Logo'
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Modal from 'react-modal';
import '../styles/NavBar.css'
import Home from './home/Home'
import AboutUs from './aboutUs/AboutUs'
import Service from './services/Service'
import Menu from '../icons/Menu'
import Close from '../icons/Close'


function NavBar() {
  
  const [componentRender, setComponentRender] = useState('home');
  
  const handleClickButton1 = () => {
    setComponentRender('home')
  };
  
  const handleClickButton2 = () => {
    setComponentRender('about')
  };
  
  const handleClickButton3 = () => {
    setComponentRender('service')
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

  const openClose = (!modalIsOpen) ? <Menu classMenu='icon iconMenu'/> : <Close classClose='icon iconMenu'/>;

    return (
      <Router>
        <header>
          <nav className="navbar">
            <div className={`containerLogo ${componentRender === 'home' ? 'active' : ''}`}>
              <Link to='/' className="logo" onClick={() => {handleClickButton1(); closeModal();}}>
                <Logo/>
              </Link>
            </div>
            <div className="sections">  
              <ul className='listMenu'>
                <li className={`sectionButton ${componentRender === 'home' ? 'active' : ''}`}>
                    <Link to='/' onClick={handleClickButton1}>Inicio</Link>
                  </li>
                <li className={`sectionButton ${componentRender === 'about' ? 'active' : ''}`}>
                    <Link to='/nosotros' onClick={handleClickButton2}>Nosotros</Link>
                  </li>
                <li className={`sectionButton ${componentRender === 'services' ? 'active' : ''}`}>
                    <Link to='/servicios' onClick={handleClickButton3}>Servicios</Link>
                  </li>
              </ul>
              <div>
                <button className='iconMenu' onClick={openModal} aria-label='menu button' title='menu button'>
                  {openClose}
                </button>
                <div>
                  <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    contentLabel='typeModal'
                    className='menuModal'
                    ariaHideApp={false}>
                      <ul className='listModal'>
                        <li className={`sectionButtonModal ${componentRender === 'home' ? 'active' : ''}`}>
                          <Link to='/' onClick={() => {handleClickButton1(); closeModal();}}>Inicio</Link>
                        </li>
                        <li className={`sectionButtonModal ${componentRender === 'about' ? 'active' : ''}`}>
                          <Link to='/nosotros' onClick={() => {handleClickButton2(); closeModal();}}>Nosotros</Link>
                        </li>
                        <li className={`sectionButtonModal ${componentRender === 'services' ? 'active' : ''}`}>
                          <Link to='/servicios' onClick={() => {handleClickButton3(); closeModal();}}>Servicios</Link>
                        </li>
                      </ul>
                    <a className='closeModal' onClick={closeModal}>Cerrar</a>
                  </Modal>
                </div>
              </div>
            </div>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nosotros" element={<AboutUs />} />
            <Route path="/servicios" element={<Service />} />
        </Routes>
        </main>
      </Router>
    )
  }
  
  export default NavBar
  
  