import Logo from '../icons/Logo'
import '../styles/NavBar.css'

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
                  <a href="#">Nosotros</a>
                  <a href="#">Servicios</a>
              </div>
        </nav>
      </>
    )
  }
  
  export default NavBar
  
  