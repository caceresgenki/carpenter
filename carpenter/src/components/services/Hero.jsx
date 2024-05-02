import '../../styles/services/hero.css'
import ButtonWS from '../home/ButtonWS'
import image1 from '../../image/wood9.jpg'


function Hero() {
  
    return (
      <>
        <section className='heroService'>
          <div className='descriptionService'>
            <h1 className='titleService'>Diseño y construcción de muebles a medida</h1>
              <div className='buttonService'>
                <ButtonWS/>
                <a href="#"><p className='detailButton'>Conócenos más ➡</p></a>
              </div>
          </div>
          <div className='imageService'>
            <img src={image1} alt="Image Wood" />
          </div>
        </section>
      </>
    )
  }
  
  export default Hero