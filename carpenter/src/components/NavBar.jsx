import Logo from '../icons/Logo'


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
                  <a href="#">Servicios</a>
                  <a href="#">Sobre Mi</a>
              </div>
        </nav>
      </>
    )
  }
  
  export default NavBar
  
  