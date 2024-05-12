import '../../styles/home/Hero.css';
import StarHome from '../../icons/StarHome'
import User from '../../icons/User'
import ButtonWS from './ButtonWS'
import imagen from '../../image/points.png';
import wood from '../../image/wood.jpg';
import World from '../../icons/World'


function Hero() {
  
    return (
      <>
        <section className='hero'>
            <div className='elementsHero'>
              <div className='company'>
                <h1 className='description' >Carpintería - Muebles únicos y más...</h1>
                <p className='called' >Calidad y atención personalizada para transformar tus espacios</p>
                <ButtonWS/>
                <article>
                  <div className='icon-star testimonialsStar'>
                    <span className='iconStarSpan borderSection'><StarHome/><StarHome/><StarHome/><StarHome/><StarHome/></span><span className='borderSection'>Muebles a pedido</span><span>Calidad y atención personalizada</span>
                  </div>
                  <p className='mesageUser'>“Los muebles que hicieron para mi casa son simplemente increíbles. La calidad y el diseño son inigualables. - Cliente satisfecho”</p>
                  <p className='user'><User /><span className='nameUser'> Michel Zeghen</span></p>
                  <p className='ubicationMap'><World/><span className='city'>Puerto La Cruz, Edo. Anzoátegui.</span></p>
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