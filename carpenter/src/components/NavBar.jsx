import Logo from '../icons/Logo'
import '../styles/NavBar.css'


function NavBar() {
  
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
  
  