import '../styles/Hero.css';
import ButtonWS from './ButtonWS'
import imagen from '../image/points.jpg';
import wood from '../image/wood.jpg';


function Hero() {
  
    return (
      <>
        <div className='hero'>
            <div className='elementsHero'>
              <div className='company'>
                <h1>Carpintería - Muebles únicos y a medida</h1>
                <h3>Calidad y atención personalizada para transformar tus espacios</h3>
                <ButtonWS/>
                <article>
                  <h4>“Los muebles que hicieron para mi casa son simplemente increíbles. La calidad y el diseño son inigualables. - Cliente satisfecho”</h4>
                  <h4>Randy Flores</h4>
                </article>
              </div>
              <div className='images'>
                <img src={imagen} className='image point'/>
                <div className='image solid'></div>
                <img src={wood} className='image wood'/>
              </div>
            </div>
        </div>
      </>
    )
  }
  
  export default Hero