import '../../styles/services/hero.css'
import ButtonWS from '../home/ButtonWS'
import image1 from '../../image/wood9.webp'
import NavBar from '../NavBar'


function Hero() {
  
  // const handleClickA = () => {
  //   handleClick();
  // };

    return (
      <>
        <section className='heroService'>
          <div className='descriptionService'>
            <h1 className='titleService'>Diseño y construcción de muebles a medida</h1>
              <div className='buttonService'>
                <ButtonWS/>
                {/* <a href='#' className='detailButton'>Conócenos más ➡</a> */}
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