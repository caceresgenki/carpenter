import '../styles/Hero.css';
import Star from '../icons/Star'
import User from '../icons/User'
import ButtonWS from './ButtonWS'
import imagen from '../image/points.jpg';
import wood from '../image/wood.jpg';


function Hero() {
  
    return (
      <>
        <section className='hero'>
            <div className='elementsHero'>
              <div className='company'>
                <h1 className='description' >Carpintería - Muebles únicos y a medida</h1>
                <p className='called' >Calidad y atención personalizada para transformar tus espacios</p>
                <ButtonWS/>
                <article>
                  <div className='icon-star'>
                    <Star/><Star/><Star/><Star/><Star/><span>| Muebles a pedido</span><span>| Calidad y atención personalizada</span>
                  </div>
                  <p className='mesageUser'>“Los muebles que hicieron para mi casa son simplemente increíbles. La calidad y el diseño son inigualables. - Cliente satisfecho”</p>
                  <p className='user'><User /><span className='nameUser'> Randy Flores </span></p>
                </article>
              </div>
              <div className='images'>
                <img src={imagen} className='image point'/>
                <div className='image solid'></div>
                <img src={wood} className='image wood'/>
              </div>
            </div>
        </section>
      </>
    )
  }
  
  export default Hero