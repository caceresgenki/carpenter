import '../../styles/aboutUs/hero.css'
import image from '../../image/points.png'


function Hero() {
  
    return (
      <>
        <section className='heroAbout'>
          <h2 className='textHeroAbout'>Sobre Nosotros</h2>
          <p className='descriptionHeroAbout'>¡Bienvenido a Carpintería! Somos una carpintería apasionada por crear muebles únicos y a medida que transformen tus espacios en algo especial. Nuestro equipo de expertos en diseño y carpintería trabaja con dedicación y atención a los detalles para ofrecerte la mejor calidad y servicio</p>
          <div className='decoAbout1'><img src={image} alt="points deco" /></div>
          <div className='decoAbout2'><img src={image} alt="points deco" /></div>
        </section>
      </>
    )
  }
  
  export default Hero