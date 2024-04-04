import Logo from '../icons/Logo'


function NavBar() {
  
    return (
      <>
        <div className="navbar">
            <div className='containerLogo'>
                <a className="logo" >
                    <Logo/> 
                </a>
            </div>
            <div className="sections">
                <a href="#">Servicios</a>
                <a href="#">Sobre Mi</a>
            </div>
        </div>
      </>
    )
  }
  
  export default NavBar
  