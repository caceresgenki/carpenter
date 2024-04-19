import image1 from '../../image/wood5.jpg'
import '../../styles/aboutUs/body.css'

function Body() {
  
    return (
      <>
        <section className='bodyAbout'>
          
            <article className='artAbout'>
              <div className='textAboutBody'>
                <h3 className='titleAboutBody'>Nuestras Creencias</h3>
                <p className='descriptionAboutBody'>En Carpintería, creemos en la importancia de la calidad, el diseño personalizado y la atención al cliente. Nos esforzamos por superar las expectativas de nuestros clientes y crear muebles que sean verdaderamente especiales.</p>
              </div>
              <div className='imageAboutBody'>
                <img src={image1} alt='Image Carpenter' />
              </div>
            </article>
        </section>
      </>
    )
  }
  
  export default Body